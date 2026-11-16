// pages/api/sendEmail.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  require('dotenv').config();

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, venue, number, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., 'gmail'
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: 'info@basatanwertech.com',
    subject: 'New Inquiry From BasatAnwarTech User',
    html: `
    <p>You have received a new message from ${name} via the website contact form. Please find the details below:</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Venue:</strong> ${venue}</p>
      <p><strong>Phone Number:</strong> ${number}</p>
      <p><strong>Message:</strong> ${message}</p>
    <p>Please take necessary action to respond to this inquiry promptly.</p>

    <p>Best regards,</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
