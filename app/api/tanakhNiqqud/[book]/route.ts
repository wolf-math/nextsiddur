import { NextResponse } from 'next/server';
import getText from '../getText';

export function GET(request: object, { params }: any) {
  const text = getText(params.book);
  console.log(text);
  return NextResponse.json(text);
}
