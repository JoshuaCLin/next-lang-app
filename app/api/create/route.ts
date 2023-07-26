import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export async function POST(req: NextRequest) {
  const { key, ...data } = await req.json();
  
  try {
    Object.keys(data).forEach((filename) => {
      const content = JSON.parse(readFileSync(path.join(process.cwd(), 'json', `${filename}.json`)).toString());
      const updateContent = { ...content, [key]: data[filename] };
      writeFileSync(path.join(process.cwd(), 'json', `${filename}.json`), JSON.stringify(updateContent));
    });
    return NextResponse.json({ isok: 'Y' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ isoke: 'N' });
  }
}

export async function DELETE(req: NextRequest) {
  const { key } = await req.json();
  try {
    const dirPath = path.join(process.cwd(), `json`)
    // 讀取指定目錄
    let files = readdirSync(dirPath);
    files.forEach(file => {
      // 檢查檔案是否為 .json 文件
      if (path.extname(file) === '.json') {
        let content = JSON.parse(readFileSync(path.join(process.cwd(), 'json', `${file}`)).toString());
        if (content.hasOwnProperty(key)) {  // 檢查有沒有key
          delete content[key];
          writeFileSync(path.join(process.cwd(), 'json', `${file}`), JSON.stringify(content));
        }
      }
    });
    return NextResponse.json({ isok: 'Y' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Delete failed' });
  }
}