import type { NextApiRequest, NextApiResponse } from 'next';
import { readFileSync, readdirSync } from 'fs';
import path from 'path';

type Data = {
  [key: string]: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const key = req.query.key as string;
  if (req.method === 'GET') {
    try {
      const files = readdirSync(path.join(process.cwd(), 'json'));
      const result = files.reduce<{ [key: string]: string }>((pre, file) => {
        const content = readFileSync(path.join(process.cwd(), 'json', file));
        const data = JSON.parse(content.toString());
        pre = { ...pre, [file.split('.')[0]]: data[key] ?? '' };
        return pre;
      }, {});
      res.status(200).json(result);
    } catch (err) {
      res.status(400).json({});
    }
  } else {
    res.status(404).json({ isOk: 'N' });
  }
}
