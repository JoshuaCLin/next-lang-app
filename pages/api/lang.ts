import type { NextApiRequest, NextApiResponse } from 'next';
import { readdirSync } from 'fs';
import path from 'path';

type Data = {
  isOk: string;
  files: string[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'GET') {
    const files = readdirSync(path.join(process.cwd(), 'json'));
    res.status(200).json({ isOk: 'Y', files: files.map((file) => file.split('.')[0]) });
  } else {
    res.status(404).json({ isOk: 'N', files: [] });
  }
}
