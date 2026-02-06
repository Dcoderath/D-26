// /api/contact.js - ENHANCED VERSION
export default async function handler(req, res) {
  // Enable CORS for testing
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle OPTIONS for CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('=== Contact Form Submission ===');
    const { name, email, message, website } = req.body;
    console.log('Form data:', { name, email, message, website });

    // Validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      console.log('Validation failed - missing fields');
      return res.status(400).json({ 
        error: 'Please fill all required fields' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({ 
        error: 'Please enter a valid email address' 
      });
    }

    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
    console.log('Google Script URL present:', !!GOOGLE_SCRIPT_URL);
    
    if (!GOOGLE_SCRIPT_URL) {
      console.error('Missing GOOGLE_SCRIPT_URL environment variable');
      // Fallback - send email notification
      return res.status(500).json({ 
        error: 'Server configuration error. Please try again later.' 
      });
    }

    // Prepare data for Google Script
    const formData = new URLSearchParams();
    formData.append('name', name.trim());
    formData.append('email', email.trim());
    formData.append('message', message.trim());
    formData.append('website', website || ''); // honeypot

    console.log('Sending to Google Script...');
    
    // Send to Google Apps Script with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    const text = await response.text();
    console.log('Google Script response:', text);

    if (text.trim() === 'OK') {
      console.log('Success! Data saved to sheet');
      return res.status(200).json({ 
        success: true, 
        message: 'Message sent successfully!' 
      });
    } else {
      console.error('Google Script error response:', text);
      return res.status(500).json({ 
        error: 'Failed to save message. Please try again.',
        details: text
      });
    }

  } catch (err) {
    console.error('API Route Error:', err);
    
    if (err.name === 'AbortError') {
      return res.status(504).json({ 
        error: 'Request timeout. Please try again.' 
      });
    }
    
    return res.status(500).json({ 
      error: 'An unexpected error occurred. Please try again later.',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
}