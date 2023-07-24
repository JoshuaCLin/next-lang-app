import { readdirSync } from 'fs';
import { type NextRequest, NextResponse } from 'next/server';
import path from 'path';

export async function GET(req: NextRequest) {
  const files = await readdirSync(path.join(process.cwd(), 'json'));
  return NextResponse.json(files.map(file => file.split('.')[0]));
}
