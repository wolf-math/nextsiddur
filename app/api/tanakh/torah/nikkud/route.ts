import { genesis } from '../genesis';
import { exodus } from '../exodus';
import { leviticus } from '../leviticus';
import { numbers } from '../numbers';
import { deuteronomy } from '../deuteronomy';

import { NextResponse } from 'next/server';

const torah = {
  genesis: genesis.nikkud,
  exodus: exodus.nikkud,
  leviticus: leviticus.nikkud,
  numbers: numbers.nikkud,
  deuteronomy: deuteronomy.nikkud
};

export function GET(res: any, req: any) {
  return NextResponse.json({ nikkud: { torah } });
}
