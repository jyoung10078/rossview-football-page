// /pages/api/send-email.js
import emailjs from '@emailjs/nodejs';

export default async function handler(req, res) {
  console.log("API endpoint called");
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get form data from request body
    const { name, email, subject, message } = req.body;
    
    // Initialize EmailJS with server-side keys
    console.log("Environment variables:", {
      publicKeyExists: !!process.env.EMAIL_PUBLIC_KEY,
      privateKeyExists: !!process.env.EMAIL_PRIVATE_KEY,
      serviceIdExists: !!process.env.VITE_EMAIL_SERVICE_ID
    });
    
    emailjs.init({
      publicKey: process.env.EMAIL_PUBLIC_KEY,
      privateKey: process.env.EMAIL_PRIVATE_KEY // Optional but recommended for server-side
    });
    
    // Send email
    const result = await emailjs.send(
      process.env.VITE_EMAIL_SERVICE_ID,
      process.env.VITE_CONTACT_TEMPLATE_ID,
      { name, email, subject, message }
    );
    
    // Also send to coaching staff
    await emailjs.send(
      process.env.VITE_EMAIL_SERVICE_ID,
      process.env.VITE_MESSAGE_PASS_TEMPLATE_ID,
      { name, email, subject, message }
    );
    
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email', message: error.message });
  }
}