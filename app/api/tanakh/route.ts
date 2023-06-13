import { NextResponse } from 'next/server';
import getText from './getText';

export function GET(req: object, { params }: any) {
  const text = getText('tanakh');

  return NextResponse.json(text);
}
