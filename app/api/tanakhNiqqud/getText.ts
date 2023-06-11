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

const tanakh = {
  niqqud: {
    tanakh: {
      title: 'tanakh',
      heTitle: 'תָּנָ״ךְ',
      torah: {
        title: 'torah',
        heTitle: 'תּוֹרָה',
        genesis: {
          title: genesis.title,
          heTitle: genesis.heTitle,
          text: genesis.text
        },
        exodus: {
          title: 'exodus',
          heTitle: exodus.heTitle,
          text: exodus.text
        },
        leviticus: {
          title: 'leviticus',
          heTitle: leviticus.heTitle,
          text: leviticus.text
        },
        numbers: {
          title: 'numbers',
          heTitle: numbers.heTitle,
          text: numbers.text
        },
        deuteronomy: {
          title: 'deuteronomy',
          heTitle: deuteronomy.heTitle,
          text: deuteronomy.text
        }
      },
      prophets: {
        title: 'prophets',
        heTitle: 'נְבִיאִים',
        joshua: {
          title: 'joshua',
          heTitle: joshua.heTitle,
          text: joshua.text
        },
        judges: {
          title: 'judges',
          heTitle: judges.heTitle,
          text: judges.text
        },
        samuel1: {
          title: 'samuel 1',
          heTitle: samuel1.heTitle,
          text: samuel1.text
        },
        samuel2: {
          title: 'samuel 2',
          heTitle: samuel2.heTitle,
          text: samuel2.text
        },
        kings1: {
          title: 'kings 1',
          heTitle: kings1.heTitle,
          text: kings1.text
        },
        kings2: {
          title: 'kings 2',
          heTitle: kings2.heTitle,
          text: kings2.text
        },
        isaiah: {
          title: 'isaiah',
          heTitle: isaiah.heTitle,
          text: isaiah.text
        },
        jeremiah: {
          title: 'jeremiah',
          heTitle: jeremiah.heTitle,
          text: jeremiah.text
        },
        ezekiel: {
          title: 'ezekiel',
          heTitle: ezekiel.heTitle,
          text: ezekiel.text
        },
        hosea: {
          title: 'hosea',
          heTitle: hosea.heTitle,
          text: hosea.text
        },
        joel: {
          title: 'joel',
          heTitle: joel.heTitle,
          text: joel.text
        },
        amos: {
          title: 'amos',
          heTitle: amos.heTitle,
          text: amos.text
        },
        obadaiah: {
          title: 'obadaiah',
          heTitle: obadaiah.heTitle,
          text: obadaiah.text
        },
        jonah: {
          title: 'jonah',
          heTitle: jonah.heTitle,
          text: jonah.text
        },
        micah: {
          title: 'micah',
          heTitle: micah.heTitle,
          text: micah.text
        },
        nahum: {
          title: 'nahum',
          heTitle: nahum.heTitle,
          text: nahum.text
        },
        habakkuk: {
          title: 'habakkuk',
          heTitle: habakkuk.heTitle,
          text: habakkuk.text
        },
        zephaniah: {
          title: 'zephaniah',
          heTitle: zephaniah.heTitle,
          text: zephaniah.text
        },
        haggai: {
          title: 'obadaiah',
          heTitle: obadaiah.heTitle,
          text: obadaiah.text
        },
        zechariah: {
          title: 'zechariah',
          heTitle: zechariah.heTitle,
          text: zechariah.text
        },
        malachi: {
          title: 'malachi',
          heTitle: malachi.heTitle,
          text: malachi.text
        }
      },
      writings: {
        psalms: {
          title: 'psalms',
          heTitle: psalms.heTitle,
          text: psalms.text
        },
        proverbs: {
          title: 'proverbs',
          heTitle: proverbs.heTitle,
          text: proverbs.text
        },
        job: {
          title: 'job',
          heTitle: job.heTitle,
          text: job.text
        },
        songofsongs: {
          title: 'song of songs',
          heTitle: songofsongs.heTitle,
          text: songofsongs.text
        },
        ruth: {
          title: 'ruth',
          heTitle: ruth.heTitle,
          text: ruth.text
        },
        lamentations: {
          title: 'lamentations',
          heTitle: lamentations.heTitle,
          text: lamentations.text
        },
        ecclesiastes: {
          title: 'ecclesiastes',
          heTitle: ecclesiastes.heTitle,
          text: ecclesiastes.text
        },
        esther: {
          title: 'esther',
          heTitle: esther.heTitle,
          text: esther.text
        },
        daniel: {
          title: 'daniel',
          heTitle: daniel.heTitle,
          text: daniel.text
        },
        ezra: {
          title: 'ezra',
          heTitle: ezra.heTitle,
          text: ezra.text
        },
        nehemiah: {
          title: 'nehemiah',
          heTitle: nehemiah.heTitle,
          text: nehemiah.text
        },
        chronicles1: {
          title: 'chronicles 1',
          heTitle: chronicles1.heTitle,
          text: chronicles1.text
        },
        chronicles2: {
          title: 'chronicles 2',
          heTitle: chronicles2.heTitle,
          text: chronicles2.text
        }
      }
    }
  }
};

interface Params {
  book: string;
  section: string;
}

export default function getVal(
  section: string,
  book: string
): object | undefined {
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
