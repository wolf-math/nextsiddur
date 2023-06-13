import { tanakh } from './books/tanakh';
import { torah } from './books/torah';
import { prophets } from './books/prophets';
import { writings } from './books/writings';

// Torah
import { genesis } from './books/genesis';
import { exodus } from './books/exodus';
import { leviticus } from './books/leviticus';
import { numbers } from './books/numbers';
import { deuteronomy } from './books/deuteronomy';

// Navi
import { joshua } from './books/joshua';
import { judges } from './books/judges';
import { samuel1 } from './books/samuel1';
import { samuel2 } from './books/samuel2';
import { kings1 } from './books/kings1';
import { kings2 } from './books/kings2';
import { isaiah } from './books/isaiah';
import { jeremiah } from './books/jeremiah';
import { ezekiel } from './books/ezekiel';
import { hosea } from './books/hosea';
import { joel } from './books/joel';
import { amos } from './books/amos';
import { obadaiah } from './books/obadiah';
import { jonah } from './books/jonah';
import { micah } from './books/micah';
import { nahum } from './books/nahum';
import { habakkuk } from './books/habakkuk';
import { zephaniah } from './books/zephaniah';
import { haggai } from './books/haggai';
import { zechariah } from './books/zechariah';
import { malachi } from './books/malachi';

// Ketuvim
import { psalms } from './books/psalms';
import { proverbs } from './books/proverbs';
import { job } from './books/job';
import { songofsongs } from './books/songofsongs';
import { ruth } from './books/ruth';
import { lamentations } from './books/lamentations';
import { ecclesiastes } from './books/ecclesiastes';
import { esther } from './books/esther';
import { daniel } from './books/daniel';
import { ezra } from './books/ezra';
import { nehemiah } from './books/nehemiah';
import { chronicles1 } from './books/chronicles1';
import { chronicles2 } from './books/chronicles2';

const allBooks = {
  tanakh,
  torah,
  prophets,
  writings,
  genesis,
  exodus,
  leviticus,
  numbers,
  deuteronomy,
  joshua,
  judges,
  samuel1,
  samuel2,
  kings1,
  kings2,
  isaiah,
  jeremiah,
  ezekiel,
  hosea,
  joel,
  amos,
  obadaiah,
  jonah,
  micah,
  nahum,
  habakkuk,
  zephaniah,
  haggai,
  zechariah,
  malachi,
  psalms,
  proverbs,
  job,
  songofsongs,
  ruth,
  lamentations,
  ecclesiastes,
  esther,
  daniel,
  ezra,
  nehemiah,
  chronicles1,
  chronicles2
};

interface Params {
  book: string;
  chapter: number | null;
  verse: number | null;
  version: string | null;
}

export default function getVal(
  book: string,
  version: string = 'text',
  chapter: number | null = null,
  verse: number | null = null
): Params {
  // @ts-ignore
  const text = allBooks[book];

  if (verse && chapter) return text[version][chapter - 1][verse - 1];
  if (chapter) return text[version][chapter - 1];

  return text;
}
