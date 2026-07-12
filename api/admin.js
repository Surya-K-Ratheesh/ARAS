export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { password, config } = req.body;
  if (password !== process.env.ADMIN_PASSWORD) return res.status(401).json({ error: 'Unauthorized' });
  if (!config) return res.status(400).json({ error: 'Config is required' });

  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO || 'Surya-K-Ratheesh/aras';

  if (!token) return res.status(500).json({ error: 'GitHub token not configured' });

  const content = Buffer.from(JSON.stringify(config, null, 2)).toString('base64');

  const getRes = await fetch(`https://api.github.com/repos/${repo}/contents/data/config.json`, {
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github.v3+json' }
  });
  const existing = await getRes.json();
  const sha = existing.sha;

  const putRes = await fetch(`https://api.github.com/repos/${repo}/contents/data/config.json`, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: 'Update config via admin', content, sha })
  });

  if (!putRes.ok) return res.status(500).json({ error: 'Failed to save' });
  res.status(200).json({ success: true });
}
