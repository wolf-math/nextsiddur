import { NextResponse } from 'next/server';
import getText from './getText';

export function GET(request: object, { params }: any) {
  const text = getText('niqqud', 'tanakh');
  return NextResponse.json(text);
}
