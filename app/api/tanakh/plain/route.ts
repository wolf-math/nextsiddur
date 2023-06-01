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
    genesis: genesis.plain,
    exodus: exodus.plain,
    leviticus: leviticus.plain,
    numbers: numbers.plain,
    deuteronomy: deuteronomy.plain
  },
  prophets: {
    joshua: joshua.plain,
    judges: judges.plain,
    samuel1: samuel1.plain,
    samuel2: samuel2.plain,
    kings1: kings1.plain,
    kings2: kings2.plain,
    isaiah: isaiah.plain,
    jeremiah: jeremiah.plain,
    ezekiel: ezekiel.plain,
    hosea: hosea.plain,
    joel: joel.plain,
    amos: amos.plain,
    obadaiah: obadaiah.plain,
    jonah: jonah.plain,
    micah: micah.plain,
    nahum: nahum.plain,
    habakkuk: habakkuk.plain,
    zephaniah: zephaniah.plain,
    haggai: haggai.plain,
    zechariah: zechariah.plain,
    malachi: malachi.plain
  },
  writings: {
    psalms: psalms.plain,
    proverbs: proverbs.plain,
    job: job.plain,
    songofsongs: songofsongs.plain,
    ruth: ruth.plain,
    lamentations: lamentations.plain,
    ecclesiastes: ecclesiastes.plain,
    esther: esther.plain,
    daniel: daniel.plain,
    ezra: ezra.plain,
    nehemiah: nehemiah.plain,
    chronicles1: chronicles1.plain,
    chronicles2: chronicles2.plain
  }
};

export function GET(res: any, req: any) {
  return NextResponse.json({ plain: { tanakh } });
}
