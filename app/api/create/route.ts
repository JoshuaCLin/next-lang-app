import { readFileSync, writeFileSync } from 'fs';
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
  console.log(key)

  return NextResponse.json({ isok: 'Y' });
}