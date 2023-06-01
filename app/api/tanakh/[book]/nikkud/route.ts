import { NextResponse } from 'next/server';
import getText from '../../getText';

export function GET(request: object, { params }: any) {
  const text = getText('nikkud', params.book);
  return NextResponse.json(text);
}
