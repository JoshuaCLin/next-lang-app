import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

type Data = {
  isOk: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const result = POST(req);
    res.status(result ? 200 : 500).json({ isOk: result ? 'Y' : 'N' });
  }

  if (req.method === 'DELETE') {
    const result = DELETE(req);
    res.status(result ? 200 : 500).json({ isOk: result ? 'Y' : 'N' });
  }

  if (req.method === 'GET') {
    res.status(404).json({ isOk: 'N' });
  }
}

function POST(req: NextApiRequest) {
  // const { key, ...data } = req.body;
  const {key} = req.body
  delete req.body['key']
  const data = req.body
  try {
    Object.keys(data).forEach((filename) => {
      const content = JSON.parse(readFileSync(path.join(process.cwd(), 'json', `${filename}.json`)).toString());
      const updateContent = { ...content, [key]: data[filename] };
      writeFileSync(path.join(process.cwd(), 'json', `${filename}.json`), JSON.stringify(updateContent));
    });
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

function DELETE(req: NextApiRequest) {
  const { key } = req.body;
  try {
    const dirPath = path.join(process.cwd(), `json`);
    // 讀取指定目錄
    let files = readdirSync(dirPath);
    files.forEach((file) => {
      // 檢查檔案是否為 .json 文件
      if (path.extname(file) === '.json') {
        let content = JSON.parse(readFileSync(path.join(process.cwd(), 'json', `${file}`)).toString());
        if (content.hasOwnProperty(key)) {
          // 檢查有沒有key
          delete content[key];
          writeFileSync(path.join(process.cwd(), 'json', `${file}`), JSON.stringify(content));
        }
      }
    });
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}
