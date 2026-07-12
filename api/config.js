import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const configPath = path.join(process.cwd(), 'data', 'config.json');
  const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(config);
}
