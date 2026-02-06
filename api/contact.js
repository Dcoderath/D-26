export default async function handler(req, res) {
  console.log('Handler triggered'); // <-- DEBUG

  if (req.method !== 'POST') {
    console.log('Not POST'); // <-- DEBUG
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;
    console.log('Received data:', name, email, message); // <-- DEBUG

    if (!name || !email || !message) {
      console.log('Missing fields'); // <-- DEBUG
      return res.status(400).json({ error: 'Missing fields' });
    }

    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
    console.log('Google Script URL:', GOOGLE_SCRIPT_URL); // <-- DEBUG

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    });

    const text = await response.text();
    console.log('Google Script response:', text); // <-- DEBUG

    if (!response.ok) {
      return res.status(500).json({ error: 'Google Script failed', details: text });
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ error: 'Server error', details: err.message });
  }
}
