import { genesis } from '../genesis';
import { exodus } from '../exodus';
import { leviticus } from '../leviticus';
import { numbers } from '../numbers';
import { deuteronomy } from '../deuteronomy';

import { NextResponse } from 'next/server';

const torah = {
  genesis: genesis.taameiHaMiqra,
  exodus: exodus.taameiHaMiqra,
  leviticus: leviticus.taameiHaMiqra,
  numbers: numbers.taameiHaMiqra,
  deuteronomy: deuteronomy.taameiHaMiqra
};

export function GET(res: any, req: any) {
  return NextResponse.json({ taameiHaMiqra: { torah } });
}
