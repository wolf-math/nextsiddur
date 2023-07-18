import { NextResponse } from 'next/server';
import getText from './getText';

export function GET(req: object, { params }: any) {
  return NextResponse.json({ message: 'please select a masechta' });
}
