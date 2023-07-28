// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { readFile, readFileSync, writeFile, writeFileSync, unlinkSync } from 'fs';
import path from 'path';

type Data = {
  isOk: string;
  data?: { [key: string]: string };
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const lang = req.query?.lang as string;
  if (req.method === 'GET') {
    const result = GET(req, lang);
    res.status(result.isOk === 'Y' ? 200 : 500).json(result);
    return
  }

  if (req.method === 'POST') {
    const result = POST(req, lang);
    res.status(result ? 200 : 500).json({ isOk: result ? 'Y' : 'N' });
    return
  }

  if (req.method === 'DELETE') {
    const result = DELETE(req, lang);
    res.status(result ? 200 : 500).json({ isOk: result ? 'Y' : 'N' });
    return
  }

  res.status(404).json({ isOk: 'N' });
}

function GET(req: NextApiRequest, lang: string): Data {
  try {
    const data = readFileSync(path.join(process.cwd(), `json/${lang}.json`));
    return { isOk: 'Y', data: JSON.parse(data.toString()) };
  } catch (err) {
    return { isOk: 'N', data: {} };
  }
}

function POST(req: NextApiRequest, lang: string) {
  const payload = req.body;
  writeFileSync(path.join(process.cwd(), `json/${lang}.json`), JSON.stringify(payload));
  return true;
}

function DELETE(req: NextApiRequest, lang: string) {
  try {
    unlinkSync(path.join(process.cwd(), `json/${lang}.json`));
    return true;
  } catch (err) {
    return false;
  }
}
