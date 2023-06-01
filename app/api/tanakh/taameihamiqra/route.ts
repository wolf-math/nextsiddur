// Torah
import { genesis } from '../torah/genesis';
import { exodus } from '../torah/exodus';
import { leviticus } from '../torah/leviticus';
import { numbers } from '../torah/numbers';
import { deuteronomy } from '../torah/deuteronomy';

// Navi
import { joshua } from '../prophets/joshua';
import { judges } from '../prophets/judges';
import { samuel1 } from '../prophets/samuel1';
import { samuel2 } from '../prophets/samuel2';
import { kings1 } from '../prophets/kings1';
import { kings2 } from '../prophets/kings2';
import { isaiah } from '../prophets/isaiah';
import { jeremiah } from '../prophets/jeremiah';
import { ezekiel } from '../prophets/ezekiel';
import { hosea } from '../prophets/hosea';
import { joel } from '../prophets/joel';
import { amos } from '../prophets/amos';
import { obadaiah } from '../prophets/obadiah';
import { jonah } from '../prophets/jonah';
import { micah } from '../prophets/micah';
import { nahum } from '../prophets/nahum';
import { habakkuk } from '../prophets/habakkuk';
import { zephaniah } from '../prophets/zephaniah';
import { haggai } from '../prophets/haggai';
import { zechariah } from '../prophets/zechariah';
import { malachi } from '../prophets/malachi';

// Ketuvim
import { psalms } from '../writings/psalms';
import { proverbs } from '../writings/proverbs';
import { job } from '../writings/job';
import { songofsongs } from '../writings/songofsongs';
import { ruth } from '../writings/ruth';
import { lamentations } from '../writings/lamentations';
import { ecclesiastes } from '../writings/ecclesiastes';
import { esther } from '../writings/esther';
import { daniel } from '../writings/daniel';
import { ezra } from '../writings/ezra';
import { nehemiah } from '../writings/nehemiah';
import { chronicles1 } from '../writings/chronicles1';
import { chronicles2 } from '../writings/chronicles2';

import { NextResponse } from 'next/server';

const tanakh = {
  torah: {
    genesis: genesis.taameiHaMiqra,
    exodus: exodus.taameiHaMiqra,
    leviticus: leviticus.taameiHaMiqra,
    numbers: numbers.taameiHaMiqra,
    deuteronomy: deuteronomy.taameiHaMiqra
  },
  prophets: {
    joshua: joshua.taameiHaMiqra,
    judges: judges.taameiHaMiqra,
    samuel1: samuel1.taameiHaMiqra,
    samuel2: samuel2.taameiHaMiqra,
    kings1: kings1.taameiHaMiqra,
    kings2: kings2.taameiHaMiqra,
    isaiah: isaiah.taameiHaMiqra,
    jeremiah: jeremiah.taameiHaMiqra,
    ezekiel: ezekiel.taameiHaMiqra,
    hosea: hosea.taameiHaMiqra,
    joel: joel.taameiHaMiqra,
    amos: amos.taameiHaMiqra,
    obadaiah: obadaiah.taameiHaMiqra,
    jonah: jonah.taameiHaMiqra,
    micah: micah.taameiHaMiqra,
    nahum: nahum.taameiHaMiqra,
    habakkuk: habakkuk.taameiHaMiqra,
    zephaniah: zephaniah.taameiHaMiqra,
    haggai: haggai.taameiHaMiqra,
    zechariah: zechariah.taameiHaMiqra,
    malachi: malachi.taameiHaMiqra
  },
  writings: {
    psalms: psalms.taameiHaMiqra,
    proverbs: proverbs.taameiHaMiqra,
    job: job.taameiHaMiqra,
    songofsongs: songofsongs.taameiHaMiqra,
    ruth: ruth.taameiHaMiqra,
    lamentations: lamentations.taameiHaMiqra,
    ecclesiastes: ecclesiastes.taameiHaMiqra,
    esther: esther.taameiHaMiqra,
    daniel: daniel.taameiHaMiqra,
    ezra: ezra.taameiHaMiqra,
    nehemiah: nehemiah.taameiHaMiqra,
    chronicles1: chronicles1.taameiHaMiqra,
    chronicles2: chronicles2.taameiHaMiqra
  }
};

export function GET(res: any, req: any) {
  return NextResponse.json({ taameiHamiqra: { tanakh } });
}
