import { NextResponse } from 'next/server';
import getText from '../getText';

const books = [
  // sederZeraim,
  'berakhot',
  'peah',
  'demai',
  'kilayim',
  'sheviit',
  'terumot',
  'maasrot',
  'maaserSheni',
  'challah',
  'orlah',
  'bikkurim',

  // sederMoed,
  'shabbat',
  'eruvin',
  'pesachim',
  'shekalim',
  'yoma',
  'sukkah',
  'beitzah',
  'roshHaShanah',
  'taanit',
  'megillah',
  'moedKatan',
  'chagigah',

  // sederNashim,
  'yevamot',
  'ketubot',
  'nedarim',
  'nazir',
  'sotah',
  'gittin',
  'kiddushin',
  'sederNezikin',
  'bavaKama',
  'bavaMetzia',
  'bavaBatra',
  'sanhedrin',
  'makkot',
  'shevuot',
  'eduyot',
  'avodahZarah',
  'avot',
  'horayot',

  // sederKodashim,
  'zevachim',
  'menachot',
  'chullin',
  'bekhorot',
  'arakin',
  'temurah',
  'keritot',
  'meila',
  'tamid',
  'middot',
  'kinnim',

  // sederTaharot,
  'keilim',
  'ohalot',
  'negaim',
  'parah',
  'tahorot',
  'mikvaot',
  'niddah',
  'makhshirin',
  'zavim',
  'tevulYom',
  'yedayim',
  'oktzin'
];

export function GET(req: object, { params }: any) {
  const masechta = books.includes(params.book[0]) ? params.book[0] : 'error';
  const chapter = Number(params.book[1]);
  const mishnah = Number(params.book[2]);

  try {
    const text = getText(masechta, chapter, mishnah);
    return NextResponse.json(text);
  } catch (e) {
    const message = `The text you requested cannot be found.`;
    return NextResponse.json(message);
  }
}
