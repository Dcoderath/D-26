export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message)
      return res.status(400).json({ error: "Missing fields" });

    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
    if (!GOOGLE_SCRIPT_URL)
      return res.status(500).json({ error: "Missing Google Script URL" });

    // Send as URL-encoded because Apps Script expects e.parameter
    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("website", ""); // honeypot

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
    });

    const text = await response.text();

    if (!text.includes("OK")) {
      return res.status(500).json({ error: "Google Script failed", details: text });
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
}
