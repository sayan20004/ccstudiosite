// api/send-callback-email.js

import nodemailer from 'nodemailer'; // ✅ ESM Import

// --- SECURITY AND CONSTANTS ---
// ⚠️ MUST BE SET AS VERCEL ENVIRONMENT VARIABLES!
const SENDER_EMAIL = process.env.EMAIL_USER; 
const SENDER_PASSWORD = process.env.EMAIL_PASS;
const RECEIVING_EMAIL = 'connect.chetnastudio@gmail.com'; 
// -----------------------------

// 1. Configure the Nodemailer Transporter
let transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: SENDER_EMAIL,
    pass: SENDER_PASSWORD,
  },
});

// ✅ ESM Export: The handler for the Vercel API Route
export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Vercel handles JSON parsing, so req.body should be an object
    const { name, phone, datetime, enquiry } = req.body;

    if (!name || !phone || !datetime || !enquiry) {
        return res.status(400).json({ error: 'Missing required fields.' });
    }

    let readableDateTime;
    try {
        readableDateTime = new Date(datetime).toLocaleString('en-IN', {
            year: 'numeric', month: 'short', day: '2-digit',
            hour: '2-digit', minute: '2-digit', hour12: true,
            timeZone: 'Asia/Kolkata' 
        });
    } catch (e) {
        readableDateTime = 'Not specified or invalid format';
    }

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
    
    return res.status(200).json({ message: 'Email sent successfully!' });

  } catch (error) {
    console.error('Email sending error:', error.message);
    // Return a 500 status on failure, which the frontend can catch
    return res.status(500).json({ error: 'Email delivery failed. Check Vercel logs for credentials issue.' });
  }
};