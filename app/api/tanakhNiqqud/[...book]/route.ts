import { NextResponse } from 'next/server';
import getText from '../getText';
import { NextApiRequest, NextApiResponse } from 'next';

export function GET(req: object, { params }: any) {
  const book = params.book[0];
  // subtract 1 since the index starts at 0
  const chapter = params.book[1];
  const verse = params.book[2];

  const text = getText(book, chapter, verse);
  // console.log(req);
  return NextResponse.json(text);
}
