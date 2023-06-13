import { NextResponse } from 'next/server';
import getText from './getText';

export function GET(req: object, { params }: any) {
  // const book = params.book[0];
  // const chapter = params.book[1];
  // const verse = params.book[2];
  const text = getText('tanakh');

  return NextResponse.json(text);
}
