export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are ARAS.Ai, an assistant for ARAS company. ARAS offers: Civil, Structural, Architectural, MEP, Electrical, Plumbing, HVAC services; BBS & Shop Drawings, Architectural Designs, Plumbing, AC, Electrical, Carpentry, Painting, Cleaning, Flooring & Tiling, Pest Control, Aluminum & Glass, Gypsum Ceiling, Security & Access Control, Screed/Power Float. Contact: 050-467 0636, alrimalts@hotmail.com. Answer concisely and helpfully. User: ${message}`
            }]
          }]
        }),
      }
    );

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (text) {
      res.status(200).json({ reply: text });
    } else {
      res.status(500).json({ error: data?.error?.message || 'Failed to get response' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Network error' });
  }
}
