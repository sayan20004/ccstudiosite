// api/send-callback-email.js

import nodemailer from 'nodemailer';

// ⚠️ IMPORTANT: These credentials MUST be set securely as Vercel Environment Variables.
// Never hardcode sensitive values directly in this file.
const SENDER_EMAIL = process.env.EMAIL_USER; 
const SENDER_PASSWORD = process.env.EMAIL_PASS;

// The email address that will receive the callback request notification
const RECEIVING_EMAIL = 'connect.chetnastudio@gmail.com'; 

// 1. Configure the Nodemailer Transporter (for sending mail)
let transporter = nodemailer.createTransport({
  // If using Gmail App Password:
  service: 'gmail', 
  auth: {
    user: SENDER_EMAIL,
    pass: SENDER_PASSWORD,
  },
  // If using a dedicated service like SendGrid, use SMTP:
  /*
  host: "smtp.sendgrid.net",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'apikey', // The username is often 'apikey'
    pass: SENDER_PASSWORD, // The actual API Key
  },
  */
});

// Vercel's standard export for API Routes
module.exports = async (req, res) => {
  // Ensure the request is a POST request
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Destructure the form data from the React component
    const { name, phone, datetime, enquiry } = req.body;

    // Basic validation
    if (!name || !phone || !datetime || !enquiry) {
        return res.status(400).json({ error: 'Missing required fields.' });
    }

    // Convert date/time string to a readable format
    const readableDateTime = new Date(datetime).toLocaleString('en-IN', {
        year: 'numeric', month: 'short', day: '2-digit',
        hour: '2-digit', minute: '2-digit', hour12: true,
        timeZone: 'Asia/Kolkata' // Use your local timezone
    });

    // 2. Define the email content
    let mailOptions = {
      from: SENDER_EMAIL,
      to: RECEIVING_EMAIL,
      subject: `New Callback Request from CC.STUDIO: ${enquiry}`,
      html: `
        <h3>A New Callback Request Has Been Submitted!</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Preferred Call Time:</strong> ${readableDateTime} (IST)</p>
        <p><strong>Enquiry For:</strong> ${enquiry}</p>
        <br>
        <p>Please call the user back at the preferred time.</p>
      `,
    };

    // 3. Send the email
    await transporter.sendMail(mailOptions);

    console.log(`Callback request successfully emailed to ${RECEIVING_EMAIL}`);
    
    // Respond to the client (React) that the submission was successful
    return res.status(200).json({ message: 'Email sent successfully!' });

  } catch (error) {
    console.error('Error in API route:', error);
    // Respond to the client with an error
    return res.status(500).json({ error: 'Failed to send email. Check server logs.' });
  }
};