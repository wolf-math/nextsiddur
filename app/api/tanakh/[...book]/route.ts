import { NextResponse } from 'next/server';
import getText from '../getText';

export function GET(req: object, { params }: any) {
  const book = params.book[0];
  const version = params.book[3];
  const chapter = Number(params.book[1]);
  const verse = Number(params.book[2]);

  // the above variables need to be written to be more
  // dynamic. The url should be in the form:
  // `/api/tanakh/[book]/[chapter]/[verse]/[version]`
  // but also have options for something like:
  // `/api/tanakh/job/taameiHaMiqra`

  // also, if params.book[1] is equal to a version type.
  // i.e. `/api/tanakh/niqqud`
  // then it should return tanakh niqqud

  try {
    const text = getText(book, version, chapter, verse);
    return NextResponse.json(text);
  } catch (e) {
    return NextResponse.json('passage cannot be found');
  }
}
