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
          text: genesis.niqqud
        },
        exodus: {
          title: 'exodus',
          heTitle: exodus.heTitle,
          text: exodus.niqqud
        },
        leviticus: {
          title: 'leviticus',
          heTitle: leviticus.heTitle,
          text: leviticus.niqqud
        },
        numbers: {
          title: 'numbers',
          heTitle: numbers.heTitle,
          text: numbers.niqqud
        },
        deuteronomy: {
          title: 'deuteronomy',
          heTitle: deuteronomy.heTitle,
          text: deuteronomy.niqqud
        }
      },
      prophets: {
        title: 'prophets',
        heTitle: 'נְבִיאִים',
        joshua: {
          title: 'joshua',
          heTitle: joshua.heTitle,
          text: joshua.niqqud
        },
        judges: {
          title: 'judges',
          heTitle: judges.heTitle,
          text: judges.niqqud
        },
        samuel1: {
          title: 'samuel 1',
          heTitle: samuel1.heTitle,
          text: samuel1.niqqud
        },
        samuel2: {
          title: 'samuel 2',
          heTitle: samuel2.heTitle,
          text: samuel2.niqqud
        },
        kings1: {
          title: 'kings 1',
          heTitle: kings1.heTitle,
          text: kings1.niqqud
        },
        kings2: {
          title: 'kings 2',
          heTitle: kings2.heTitle,
          text: kings2.niqqud
        },
        isaiah: {
          title: 'isaiah',
          heTitle: isaiah.heTitle,
          text: isaiah.niqqud
        },
        jeremiah: {
          title: 'jeremiah',
          heTitle: jeremiah.heTitle,
          text: jeremiah.niqqud
        },
        ezekiel: {
          title: 'ezekiel',
          heTitle: ezekiel.heTitle,
          text: ezekiel.niqqud
        },
        hosea: {
          title: 'hosea',
          heTitle: hosea.heTitle,
          text: hosea.niqqud
        },
        joel: {
          title: 'joel',
          heTitle: joel.heTitle,
          text: joel.niqqud
        },
        amos: {
          title: 'amos',
          heTitle: amos.heTitle,
          text: amos.niqqud
        },
        obadaiah: {
          title: 'obadaiah',
          heTitle: obadaiah.heTitle,
          text: obadaiah.niqqud
        },
        jonah: {
          title: 'jonah',
          heTitle: jonah.heTitle,
          text: jonah.niqqud
        },
        micah: {
          title: 'micah',
          heTitle: micah.heTitle,
          text: micah.niqqud
        },
        nahum: {
          title: 'nahum',
          heTitle: nahum.heTitle,
          text: nahum.niqqud
        },
        habakkuk: {
          title: 'habakkuk',
          heTitle: habakkuk.heTitle,
          text: habakkuk.niqqud
        },
        zephaniah: {
          title: 'zephaniah',
          heTitle: zephaniah.heTitle,
          text: zephaniah.niqqud
        },
        haggai: {
          title: 'obadaiah',
          heTitle: obadaiah.heTitle,
          text: obadaiah.niqqud
        },
        zechariah: {
          title: 'zechariah',
          heTitle: zechariah.heTitle,
          text: zechariah.niqqud
        },
        malachi: {
          title: 'malachi',
          heTitle: malachi.heTitle,
          text: malachi.niqqud
        }
      },
      writings: {
        psalms: {
          title: 'psalms',
          heTitle: psalms.heTitle,
          text: psalms.niqqud
        },
        proverbs: {
          title: 'proverbs',
          heTitle: proverbs.heTitle,
          text: proverbs.niqqud
        },
        job: {
          title: 'job',
          heTitle: job.heTitle,
          text: job.niqqud
        },
        songofsongs: {
          title: 'song of songs',
          heTitle: songofsongs.heTitle,
          text: songofsongs.niqqud
        },
        ruth: {
          title: 'ruth',
          heTitle: ruth.heTitle,
          text: ruth.niqqud
        },
        lamentations: {
          title: 'lamentations',
          heTitle: lamentations.heTitle,
          text: lamentations.niqqud
        },
        ecclesiastes: {
          title: 'ecclesiastes',
          heTitle: ecclesiastes.heTitle,
          text: ecclesiastes.niqqud
        },
        esther: {
          title: 'esther',
          heTitle: esther.heTitle,
          text: esther.niqqud
        },
        daniel: {
          title: 'daniel',
          heTitle: daniel.heTitle,
          text: daniel.niqqud
        },
        ezra: {
          title: 'ezra',
          heTitle: ezra.heTitle,
          text: ezra.niqqud
        },
        nehemiah: {
          title: 'nehemiah',
          heTitle: nehemiah.heTitle,
          text: nehemiah.niqqud
        },
        chronicles1: {
          title: 'chronicles 1',
          heTitle: chronicles1.heTitle,
          text: chronicles1.niqqud
        },
        chronicles2: {
          title: 'chronicles 2',
          heTitle: chronicles2.heTitle,
          text: chronicles2.niqqud
        }
      }
    }
  },
  plain: {
    tanakh: {
      title: 'tanakh',
      heTitle: 'תָּנָ״ךְ',
      torah: {
        title: 'torah',
        heTitle: 'תּוֹרָה',
        genesis: {
          title: genesis.title,
          heTitle: genesis.heTitle,
          text: genesis.plain
        },
        exodus: {
          title: 'exodus',
          heTitle: exodus.heTitle,
          text: exodus.plain
        },
        leviticus: {
          title: 'leviticus',
          heTitle: leviticus.heTitle,
          text: leviticus.plain
        },
        numbers: {
          title: 'numbers',
          heTitle: numbers.heTitle,
          text: numbers.plain
        },
        deuteronomy: {
          title: 'deuteronomy',
          heTitle: deuteronomy.heTitle,
          text: deuteronomy.plain
        }
      },
      prophets: {
        title: 'prophets',
        heTitle: 'נְבִיאִים',
        joshua: {
          title: 'joshua',
          heTitle: joshua.heTitle,
          text: joshua.plain
        },
        judges: {
          title: 'judges',
          heTitle: judges.heTitle,
          text: judges.plain
        },
        samuel1: {
          title: 'samuel 1',
          heTitle: samuel1.heTitle,
          text: samuel1.plain
        },
        samuel2: {
          title: 'samuel 2',
          heTitle: samuel2.heTitle,
          text: samuel2.plain
        },
        kings1: {
          title: 'kings 1',
          heTitle: kings1.heTitle,
          text: kings1.plain
        },
        kings2: {
          title: 'kings 2',
          heTitle: kings2.heTitle,
          text: kings2.plain
        },
        isaiah: {
          title: 'isaiah',
          heTitle: isaiah.heTitle,
          text: isaiah.plain
        },
        jeremiah: {
          title: 'jeremiah',
          heTitle: jeremiah.heTitle,
          text: jeremiah.plain
        },
        ezekiel: {
          title: 'ezekiel',
          heTitle: ezekiel.heTitle,
          text: ezekiel.plain
        },
        hosea: {
          title: 'hosea',
          heTitle: hosea.heTitle,
          text: hosea.plain
        },
        joel: {
          title: 'joel',
          heTitle: joel.heTitle,
          text: joel.plain
        },
        amos: {
          title: 'amos',
          heTitle: amos.heTitle,
          text: amos.plain
        },
        obadaiah: {
          title: 'obadaiah',
          heTitle: obadaiah.heTitle,
          text: obadaiah.plain
        },
        jonah: {
          title: 'jonah',
          heTitle: jonah.heTitle,
          text: jonah.plain
        },
        micah: {
          title: 'micah',
          heTitle: micah.heTitle,
          text: micah.plain
        },
        nahum: {
          title: 'nahum',
          heTitle: nahum.heTitle,
          text: nahum.plain
        },
        habakkuk: {
          title: 'habakkuk',
          heTitle: habakkuk.heTitle,
          text: habakkuk.plain
        },
        zephaniah: {
          title: 'zephaniah',
          heTitle: zephaniah.heTitle,
          text: zephaniah.plain
        },
        haggai: {
          title: 'obadaiah',
          heTitle: obadaiah.heTitle,
          text: obadaiah.plain
        },
        zechariah: {
          title: 'zechariah',
          heTitle: zechariah.heTitle,
          text: zechariah.plain
        },
        malachi: {
          title: 'malachi',
          heTitle: malachi.heTitle,
          text: malachi.plain
        }
      },
      writings: {
        psalms: {
          title: 'psalms',
          heTitle: psalms.heTitle,
          text: psalms.plain
        },
        proverbs: {
          title: 'proverbs',
          heTitle: proverbs.heTitle,
          text: proverbs.plain
        },
        job: {
          title: 'job',
          heTitle: job.heTitle,
          text: job.plain
        },
        songofsongs: {
          title: 'song of songs',
          heTitle: songofsongs.heTitle,
          text: songofsongs.plain
        },
        ruth: {
          title: 'ruth',
          heTitle: ruth.heTitle,
          text: ruth.plain
        },
        lamentations: {
          title: 'lamentations',
          heTitle: lamentations.heTitle,
          text: lamentations.plain
        },
        ecclesiastes: {
          title: 'ecclesiastes',
          heTitle: ecclesiastes.heTitle,
          text: ecclesiastes.plain
        },
        esther: {
          title: 'esther',
          heTitle: esther.heTitle,
          text: esther.plain
        },
        daniel: {
          title: 'daniel',
          heTitle: daniel.heTitle,
          text: daniel.plain
        },
        ezra: {
          title: 'ezra',
          heTitle: ezra.heTitle,
          text: ezra.plain
        },
        nehemiah: {
          title: 'nehemiah',
          heTitle: nehemiah.heTitle,
          text: nehemiah.plain
        },
        chronicles1: {
          title: 'chronicles 1',
          heTitle: chronicles1.heTitle,
          text: chronicles1.plain
        },
        chronicles2: {
          title: 'chronicles 2',
          heTitle: chronicles2.heTitle,
          text: chronicles2.plain
        }
      }
    }
  },
  taameiHaMiqra: {
    tanakh: {
      title: 'tanakh',
      heTitle: 'תָּנָ״ךְ',
      torah: {
        title: 'torah',
        heTitle: 'תּוֹרָה',
        genesis: {
          title: genesis.title,
          heTitle: genesis.heTitle,
          text: genesis.taameiHaMiqra
        },
        exodus: {
          title: 'exodus',
          heTitle: exodus.heTitle,
          text: exodus.taameiHaMiqra
        },
        leviticus: {
          title: 'leviticus',
          heTitle: leviticus.heTitle,
          text: leviticus.taameiHaMiqra
        },
        numbers: {
          title: 'numbers',
          heTitle: numbers.heTitle,
          text: numbers.taameiHaMiqra
        },
        deuteronomy: {
          title: 'deuteronomy',
          heTitle: deuteronomy.heTitle,
          text: deuteronomy.taameiHaMiqra
        }
      },
      prophets: {
        title: 'prophets',
        heTitle: 'נְבִיאִים',
        joshua: {
          title: 'joshua',
          heTitle: joshua.heTitle,
          text: joshua.taameiHaMiqra
        },
        judges: {
          title: 'judges',
          heTitle: judges.heTitle,
          text: judges.taameiHaMiqra
        },
        samuel1: {
          title: 'samuel 1',
          heTitle: samuel1.heTitle,
          text: samuel1.taameiHaMiqra
        },
        samuel2: {
          title: 'samuel 2',
          heTitle: samuel2.heTitle,
          text: samuel2.taameiHaMiqra
        },
        kings1: {
          title: 'kings 1',
          heTitle: kings1.heTitle,
          text: kings1.taameiHaMiqra
        },
        kings2: {
          title: 'kings 2',
          heTitle: kings2.heTitle,
          text: kings2.taameiHaMiqra
        },
        isaiah: {
          title: 'isaiah',
          heTitle: isaiah.heTitle,
          text: isaiah.taameiHaMiqra
        },
        jeremiah: {
          title: 'jeremiah',
          heTitle: jeremiah.heTitle,
          text: jeremiah.taameiHaMiqra
        },
        ezekiel: {
          title: 'ezekiel',
          heTitle: ezekiel.heTitle,
          text: ezekiel.taameiHaMiqra
        },
        hosea: {
          title: 'hosea',
          heTitle: hosea.heTitle,
          text: hosea.taameiHaMiqra
        },
        joel: {
          title: 'joel',
          heTitle: joel.heTitle,
          text: joel.taameiHaMiqra
        },
        amos: {
          title: 'amos',
          heTitle: amos.heTitle,
          text: amos.taameiHaMiqra
        },
        obadaiah: {
          title: 'obadaiah',
          heTitle: obadaiah.heTitle,
          text: obadaiah.taameiHaMiqra
        },
        jonah: {
          title: 'jonah',
          heTitle: jonah.heTitle,
          text: jonah.taameiHaMiqra
        },
        micah: {
          title: 'micah',
          heTitle: micah.heTitle,
          text: micah.taameiHaMiqra
        },
        nahum: {
          title: 'nahum',
          heTitle: nahum.heTitle,
          text: nahum.taameiHaMiqra
        },
        habakkuk: {
          title: 'habakkuk',
          heTitle: habakkuk.heTitle,
          text: habakkuk.taameiHaMiqra
        },
        zephaniah: {
          title: 'zephaniah',
          heTitle: zephaniah.heTitle,
          text: zephaniah.taameiHaMiqra
        },
        haggai: {
          title: 'obadaiah',
          heTitle: obadaiah.heTitle,
          text: obadaiah.taameiHaMiqra
        },
        zechariah: {
          title: 'zechariah',
          heTitle: zechariah.heTitle,
          text: zechariah.taameiHaMiqra
        },
        malachi: {
          title: 'malachi',
          heTitle: malachi.heTitle,
          text: malachi.taameiHaMiqra
        }
      },
      writings: {
        psalms: {
          title: 'psalms',
          heTitle: psalms.heTitle,
          text: psalms.taameiHaMiqra
        },
        proverbs: {
          title: 'proverbs',
          heTitle: proverbs.heTitle,
          text: proverbs.taameiHaMiqra
        },
        job: {
          title: 'job',
          heTitle: job.heTitle,
          text: job.taameiHaMiqra
        },
        songofsongs: {
          title: 'song of songs',
          heTitle: songofsongs.heTitle,
          text: songofsongs.taameiHaMiqra
        },
        ruth: {
          title: 'ruth',
          heTitle: ruth.heTitle,
          text: ruth.taameiHaMiqra
        },
        lamentations: {
          title: 'lamentations',
          heTitle: lamentations.heTitle,
          text: lamentations.taameiHaMiqra
        },
        ecclesiastes: {
          title: 'ecclesiastes',
          heTitle: ecclesiastes.heTitle,
          text: ecclesiastes.taameiHaMiqra
        },
        esther: {
          title: 'esther',
          heTitle: esther.heTitle,
          text: esther.taameiHaMiqra
        },
        daniel: {
          title: 'daniel',
          heTitle: daniel.heTitle,
          text: daniel.taameiHaMiqra
        },
        ezra: {
          title: 'ezra',
          heTitle: ezra.heTitle,
          text: ezra.taameiHaMiqra
        },
        nehemiah: {
          title: 'nehemiah',
          heTitle: nehemiah.heTitle,
          text: nehemiah.taameiHaMiqra
        },
        chronicles1: {
          title: 'chronicles 1',
          heTitle: chronicles1.heTitle,
          text: chronicles1.taameiHaMiqra
        },
        chronicles2: {
          title: 'chronicles 2',
          heTitle: chronicles2.heTitle,
          text: chronicles2.taameiHaMiqra
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
