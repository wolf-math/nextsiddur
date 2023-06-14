import { NextResponse } from 'next/server';
import getText from '../getText';

const versions = ['niqqud', 'plain', 'taameiHaMiqra'];
const books = [
  'tanakh',
  'torah',
  'prophets',
  'writings',
  'genesis',
  'exodus',
  'leviticus',
  'numbers',
  'deuteronomy',
  'joshua',
  'judges',
  'samuel1',
  'samuel2',
  'kings1',
  'kings2',
  'isaiah',
  'jeremiah',
  'ezekiel',
  'hosea',
  'joel',
  'amos',
  'obadaiah',
  'jonah',
  'micah',
  'nahum',
  'habakkuk',
  'zephaniah',
  'haggai',
  'zechariah',
  'malachi',
  'psalms',
  'proverbs',
  'job',
  'songofsongs',
  'ruth',
  'lamentations',
  'ecclesiastes',
  'esther',
  'daniel',
  'ezra',
  'nehemiah',
  'chronicles1',
  'chronicles2'
];

export function GET(req: object, { params }: any) {
  const book = books.includes(params.book[0]) ? params.book[0] : 'error';
  const version = versions.includes(params.book[params.book.length - 1])
    ? params.book[params.book.length - 1]
    : 'niqqud';
  const chapter = Number(params.book[1]);
  const verse = Number(params.book[2]);

  // the above variables need to be written to be more
  // dynamic. The url should be in the form:
  // `/api/tanakh/[book]/[chapter]/[verse]/[version]`
  // where [chapter] and [verse] are optional, but [version] still works
  // for example: `/api/tanakh/job/taameiHaMiqra`

  // also, if params.book[1] is equal to a version type.
  // i.e. `/api/tanakh/niqqud`
  // then it should return tanakh niqqud

  try {
    const text = getText(book, version, chapter, verse);
    return NextResponse.json(text);
  } catch (e) {
    const message = `The passage you requested cannot be found.`;
    return NextResponse.json(message);
  }
}
