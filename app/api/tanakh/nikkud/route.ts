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
    genesis: genesis.nikkud,
    exodus: exodus.nikkud,
    leviticus: leviticus.nikkud,
    numbers: numbers.nikkud,
    deuteronomy: deuteronomy.nikkud
  },
  prophets: {
    joshua: joshua.nikkud,
    judges: judges.nikkud,
    samuel1: samuel1.nikkud,
    samuel2: samuel2.nikkud,
    kings1: kings1.nikkud,
    kings2: kings2.nikkud,
    isaiah: isaiah.nikkud,
    jeremiah: jeremiah.nikkud,
    ezekiel: ezekiel.nikkud,
    hosea: hosea.nikkud,
    joel: joel.nikkud,
    amos: amos.nikkud,
    obadaiah: obadaiah.nikkud,
    jonah: jonah.nikkud,
    micah: micah.nikkud,
    nahum: nahum.nikkud,
    habakkuk: habakkuk.nikkud,
    zephaniah: zephaniah.nikkud,
    haggai: haggai.nikkud,
    zechariah: zechariah.nikkud,
    malachi: malachi.nikkud
  },
  writings: {
    psalms: psalms.nikkud,
    proverbs: proverbs.nikkud,
    job: job.nikkud,
    songofsongs: songofsongs.nikkud,
    ruth: ruth.nikkud,
    lamentations: lamentations.nikkud,
    ecclesiastes: ecclesiastes.nikkud,
    esther: esther.nikkud,
    daniel: daniel.nikkud,
    ezra: ezra.nikkud,
    nehemiah: nehemiah.nikkud,
    chronicles1: chronicles1.nikkud,
    chronicles2: chronicles2.nikkud
  }
};

export function GET(res: any, req: any) {
  return NextResponse.json({ nikkud: { tanakh } });
}
