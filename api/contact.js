export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message)
      return res.status(400).json({ error: "Missing fields" });

    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const text = await response.text();
    if (!text.includes("success")) {
      return res.status(500).json({ error: "Google Script failed", details: text });
    }

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
}
