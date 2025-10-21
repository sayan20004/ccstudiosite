// api/send-callback-email.js

import nodemailer from 'nodemailer'; 

// --- SECURITY AND CONSTANTS ---
const SENDER_EMAIL = process.env.EMAIL_USER; 
const SENDER_PASSWORD = process.env.EMAIL_PASS;
const RECEIVING_EMAIL = 'connect.chetnastudio@gmail.com'; 
// -----------------------------

let transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: SENDER_EMAIL,
    pass: SENDER_PASSWORD,
  },
});

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
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

    let mailOptions = {
      from: SENDER_EMAIL,
      to: RECEIVING_EMAIL,
      subject: `New Callback Request from CC.STUDIO: ${enquiry}`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #333333; padding: 20px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td align="center">
                        <table width="600" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #222222; border-radius: 8px; overflow: hidden;">
                            
                            <tr>
                                <td style="background-color: #C1B5E8; color: #333333; font-size: 16px; padding: 20px 0;">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" 
                                    style="background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><rect width="5" height="5" fill="#E8DFFF"/><rect x="5" y="5" width="5" height="5" fill="#E8DFFF"/><rect x="5" width="5" height="5" fill="#A499C0"/><rect y="5" width="5" height="5" fill="#A499C0"/></svg>'); background-size: 10px 10px; padding: 20px 0;">
                                        <tr>
                                            <td align="center">
                                                <h1 style="font-size: 30px; color: #FFFFFF; margin: 0; padding: 10px; background-color: #555555; display: inline-block; border-radius: 6px; font-family: 'Arial Black', Gadget, sans-serif;">
                                                    CC.STUDIO LEAD
                                                </h1>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            
                            <tr>
                                <td style="background-color: #FFFFFF; padding: 30px;">
                                    <h2 style="color: #FFB800; font-size: 24px; margin-top: 0; border-bottom: 3px solid #FFB800; padding-bottom: 10px;">
                                        NEW CALLBACK REQUEST!
                                    </h2>
                                    
                                    <p style="color: #333333; font-size: 18px; line-height: 1.5; margin-bottom: 25px;">
                                        A new lead has requested a call. Please prioritize contacting them!
                                    </p>
                                    
                                    ${generateDataBlock('Name', name, '#E8DFFF')}
                                    ${generateDataBlock('Phone Number', phone, '#FFD8A8')}
                                    ${generateDataBlock('Enquiry For', enquiry, '#E8DFFF')}
                                    ${generateDataBlock('Preferred Call Time', readableDateTime, '#FFD8A8')}

                                    <p style="text-align: center; margin-top: 35px;">
                                        <a href="tel:${phone}" style="background-color: #FFB800; color: #FFFFFF; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 18px; display: inline-block;">
                                            CLICK TO CALL NOW
                                        </a>
                                    </p>
                                </td>
                            </tr>
                            
                            <tr>
                                <td style="background-color: #333333; color: #AAAAAA; font-size: 12px; text-align: center; padding: 20px;">
                                    <p style="margin: 0;">This is an automated notification from your CC.STUDIO website.</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
      `,
    };

    // Helper function to create the colorful blocks 
    function generateDataBlock(label, value, bgColor) {
        return `
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 15px;">
                <tr>
                    <td style="background-color: ${bgColor}; padding: 15px 20px; border-radius: 8px;">
                        <p style="color: #666666; font-size: 14px; margin: 0; font-weight: bold; text-transform: uppercase;">${label}</p>
                        <p style="color: #111111; font-size: 20px; margin: 5px 0 0 0; font-weight: bold;">${value}</p>
                    </td>
                </tr>
            </table>
        `;
    }

    // 3. Send the email
    await transporter.sendMail(mailOptions);
    
    return res.status(200).json({ message: 'Email sent successfully!' });

  } catch (error) {
    console.error('Email sending error:', error.message);
    return res.status(500).json({ error: 'Email delivery failed. Check Vercel logs for credentials issue.' });
  }
};