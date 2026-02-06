// /api/contact.js - FIXED VERSION
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message, website } = req.body;

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Get Google Script URL
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
    if (!GOOGLE_SCRIPT_URL) {
      console.error("Missing GOOGLE_SCRIPT_URL environment variable");
      return res.status(500).json({ error: "Server configuration error" });
    }

    // Prepare form data
    const formData = new URLSearchParams();
    formData.append("name", name.trim());
    formData.append("email", email.trim());
    formData.append("message", message.trim());
    formData.append("website", website || ""); // honeypot

    console.log("Sending to Google Script:", GOOGLE_SCRIPT_URL);
    console.log("Data:", { name, email, message });

    // Send to Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    const text = await response.text();
    console.log("Google Script response:", text);

    if (text.trim() !== "OK") {
      console.error("Google Script returned error:", text);
      return res.status(500).json({ 
        error: "Failed to save to sheet", 
        details: text 
      });
    }

    return res.status(200).json({ success: true });
    
  } catch (err) {
    console.error("API Error:", err);
    return res.status(500).json({ 
      error: "Server error", 
      details: err.message 
    });
  }
}