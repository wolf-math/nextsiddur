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
import { zechariah } from './zechariah';
import { malachi } from './malachi';
import { haggai } from './haggai';

export const prophets = (version: string) => {
  return {
    title: 'prophets',
    heTitle: 'נְבִיאִים',
    version,
    joshua: joshua(version),
    judges: judges(version),
    samuel1: samuel1(version),
    samuel2: samuel2(version),
    kings1: kings1(version),
    kings2: kings2(version),
    isaiah: isaiah(version),
    jeremiah: jeremiah(version),
    ezekiel: ezekiel(version),
    hosea: hosea(version),
    joel: joel(version),
    amos: amos(version),
    obadaiah: obadaiah(version),
    jonah: jonah(version),
    micah: micah(version),
    nahum: nahum(version),
    habakkuk: habakkuk(version),
    zephaniah: zephaniah(version),
    haggai: haggai(version),
    zechariah: zechariah(version),
    malachi: malachi(version)
  };
};
