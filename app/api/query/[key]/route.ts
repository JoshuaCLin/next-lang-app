import { readFileSync, readdirSync } from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export function GET(req: NextRequest, {params}: {params: {key: string}}) {
  const {key} = params;

  const files = readdirSync(path.join(process.cwd(), 'json'));
  const result = files.reduce<{[key: string]: string}>((pre, file) => {
    const content = readFileSync(path.join(process.cwd(), 'json', file));
    const data = JSON.parse(content.toString());
    pre = { ...pre, [file.split('.')[0]]: data[key] ?? ''}
    console.log(pre);
    return pre;
  }, {});
  return NextResponse.json(result);
}