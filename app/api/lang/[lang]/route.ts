import { NextRequest, NextResponse } from 'next/server';
import { readFile, readFileSync, writeFile, writeFileSync, unlinkSync } from 'fs';
import path from 'path';

export async function GET(req: NextRequest, { params }: { params: { lang: string } }) {
  const { lang } = params;
  try {
    const data = await readFileSync(path.join(process.cwd(), `json/${lang}.json`));
    return NextResponse.json(JSON.parse(data.toString()));
  } catch (err) {
    console.error(err);
    return NextResponse.json({ lang: `${lang}` });
  }
}


export async function POST(req: Request, { params }: { params: { lang: string } }) {
  const { lang } = params;
  const payload = await req.json();
  const updatedData = JSON.stringify(payload);
  await writeFileSync(path.join(process.cwd(), `json/${lang}.json`), updatedData);
  return NextResponse.json({ isok: 'y' });
}

export async function DELETE(req: NextRequest, { params }: { params: { lang: string } }) {
  const { lang } = params;
  try {
    await unlinkSync(path.join(process.cwd(), `json/${lang}.json`));
    return NextResponse.json({ message: 'Delete success' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Delete failed' });
  }
}

