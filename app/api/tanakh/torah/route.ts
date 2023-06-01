import { genesis } from './genesis';
import { exodus } from './exodus';
import { leviticus } from './leviticus';
import { numbers } from './numbers';
import { deuteronomy } from './deuteronomy';

import { NextResponse } from 'next/server';

export function GET(res: any, req: any) {
  return NextResponse.json([genesis, exodus, leviticus, numbers, deuteronomy]);
}
