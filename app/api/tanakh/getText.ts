// Torah
import { genesis } from './genesis';
import { exodus } from './exodus';
import { leviticus } from './leviticus';
import { numbers } from './numbers';
import { deuteronomy } from './deuteronomy';

// Navi
import { joshua } from './joshua';
import { judges } from './judges';
import { samuel1 } from './samuel1';
import { samuel2 } from './samuel2';
import { kings1 } from './kings1';
import { kings2 } from './kings2';
import { isaiah } from './isaiah';
import { jeremiah } from './jeremiah';
import { ezekiel } from './ezekiel';
import { hosea } from './hosea';
import { joel } from './joel';
import { amos } from './amos';
import { obadaiah } from './obadiah';
import { jonah } from './jonah';
import { micah } from './micah';
import { nahum } from './nahum';
import { habakkuk } from './habakkuk';
import { zephaniah } from './zephaniah';
import { haggai } from './haggai';
import { zechariah } from './zechariah';
import { malachi } from './malachi';

// Ketuvim
import { psalms } from './psalms';
import { proverbs } from './proverbs';
import { job } from './job';
import { songofsongs } from './songofsongs';
import { ruth } from './ruth';
import { lamentations } from './lamentations';
import { ecclesiastes } from './ecclesiastes';
import { esther } from './esther';
import { daniel } from './daniel';
import { ezra } from './ezra';
import { nehemiah } from './nehemiah';
import { chronicles1 } from './chronicles1';
import { chronicles2 } from './chronicles2';

const tanakh = {
  nikkud: {
    tanakh: {
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
    }
  },
  plain: {
    tanakh: {
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
    }
  },

  taameiHaMiqra: {
    tanakh: {
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
    }
  }
};

interface Params {
  book: string;
  type: string;
}

export default function getVal(section: string, book: string): any {
  // @ts-ignore
  const sectionObj = tanakh[section];
  if (!sectionObj) {
    return undefined;
  }

  const stack = [sectionObj];

  while (stack.length > 0) {
    const obj = stack.pop();

    for (const prop in obj) {
      if (typeof obj[prop] === 'object' && obj[prop] !== null) {
        if (prop === book) {
          return obj[prop];
        }
        stack.push(obj[prop]);
      }
    }
  }
  return undefined;
}
