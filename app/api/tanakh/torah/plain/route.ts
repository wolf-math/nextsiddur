import { genesis } from '../genesis';
import { exodus } from '../exodus';
import { leviticus } from '../leviticus';
import { numbers } from '../numbers';
import { deuteronomy } from '../deuteronomy';

import { NextResponse } from 'next/server';

const torah = {
  genesis: genesis.plain,
  exodus: exodus.plain,
  leviticus: leviticus.plain,
  numbers: numbers.plain,
  deuteronomy: deuteronomy.plain
};

export function GET(res: any, req: any) {
  return NextResponse.json({ plain: { torah } });
}
