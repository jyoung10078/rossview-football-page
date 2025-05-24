// api/send-email.js
const emailjs = require('@emailjs/nodejs');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get form data from request body
    const { name, email, subject, message } = req.body;
    
    // Log environment variables (without exposing actual values)
    console.log('Environment variables check:', {
      publicKeyExists: !!process.env.EMAIL_PUBLIC_KEY,
      privateKeyExists: !!process.env.EMAIL_PRIVATE_KEY,
      serviceIdExists: !!process.env.VITE_EMAIL_SERVICE_ID,
      contactTemplateIdExists: !!process.env.VITE_CONTACT_TEMPLATE_ID,
      messagePassTemplateIdExists: !!process.env.VITE_MESSAGE_PASS_TEMPLATE_ID
    });
    
    // Initialize EmailJS with server-side keys
    emailjs.init({
      publicKey: process.env.EMAIL_PUBLIC_KEY,
      privateKey: process.env.EMAIL_PRIVATE_KEY
    });
    
    // Send email
    const serviceId = process.env.VITE_EMAIL_SERVICE_ID;
    const contactTemplateId = process.env.VITE_CONTACT_TEMPLATE_ID;
    const messagePassTemplateId = process.env.VITE_MESSAGE_PASS_TEMPLATE_ID;
    
    // Send first email
    const result = await emailjs.send(
      serviceId,
      contactTemplateId,
      { 
        name, 
        email, 
        subject, 
        message 
      }
    );
    
    console.log('First email sent successfully:', result.status);
    
    // Also send to coaching staff
    const result2 = await emailjs.send(
      serviceId,
      messagePassTemplateId,
      { 
        name, 
        email, 
        subject, 
        message 
      }
    );
    
    console.log('Second email sent successfully:', result2.status);
    
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error.message);
    return res.status(500).json({ 
      error: 'Failed to send email', 
      message: error.message,
      stack: error.stack
    });
  }
}