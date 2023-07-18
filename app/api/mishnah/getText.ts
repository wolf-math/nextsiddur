// zeraim
import { sederZeraim } from './book/sederZeraim';
import { berakhot } from './book/berakhot';
import { peah } from './book/peah';
import { demai } from './book/demai';
import { kilayim } from './book/kilayim';
import { sheviit } from './book/sheviit';
import { terumot } from './book/terumot';
import { maasrot } from './book/maasrot';
import { maaserSheni } from './book/maaserSheni';
import { challah } from './book/challah';
import { orlah } from './book/orlah';
import { bikkurim } from './book/bikkurim';

// moed
import { sederMoed } from './book/sederMoed';
import { shabbat } from './book/shabbat';
import { eruvin } from './book/eruvin';
import { pesachim } from './book/pesachim';
import { shekalim } from './book/shekalim';
import { yoma } from './book/yoma';
import { sukkah } from './book/sukkah';
import { beitzah } from './book/beitza';
import { roshHaShanah } from './book/roshHaShanah';
import { taanit } from './book/taanit';
import { megillah } from './book/megillah';
import { moedKatan } from './book/moedKatan';
import { chagigah } from './book/chagigah';

// nashim
import { sederNashim } from './book/sederNashim';
import { yevamot } from './book/yevamot';
import { ketubot } from './book/ketubot';
import { nedarim } from './book/nedarim';
import { nazir } from './book/nazir';
import { sotah } from './book/sotah';
import { gittin } from './book/gittin';
import { kiddushin } from './book/kiddushin';

// nezikin
import { sederNezikin } from './book/sederNezikin';
import { bavaKama } from './book/bavaKama';
import { bavaMetzia } from './book/bavaMetzia';
import { bavaBatra } from './book/bavaBatra';
import { sanhedrin } from './book/sanhedrin';
import { makkot } from './book/makkot';
import { shevuot } from './book/shevuot';
import { eduyot } from './book/eduyot';
import { avodahZarah } from './book/avodahZarah';
import { avot } from './book/avot';
import { horayot } from './book/horayot';

// kodashim
import { sederKodashim } from './book/sederKodashim';
import { zevachim } from './book/zevachim';
import { menachot } from './book/menachot';
import { chullin } from './book/chullin';
import { bekhorot } from './book/bekhorot';
import { arakin } from './book/arakhin'; // check this
import { temurah } from './book/temurah';
import { keritot } from './book/keritot';
import { meila } from './book/meila';
import { tamid } from './book/tamid';
import { middot } from './book/middot';
import { kinnim } from './book/kinnim';

// taharot
import { sederTaharot } from './book/sederTaharot';
import { keilim } from './book/keilim';
import { ohalot } from './book/ohalot';
import { negaim } from './book/negaim';
import { parah } from './book/parah';
import { tahorot } from './book/tahorot';
import { mikvaot } from './book/mikvaot';
import { niddah } from './book/niddah';
import { makhshirin } from './book/makhshirin';
import { zavim } from './book/zavim';
import { tevulYom } from './book/tevulYom';
import { yedayim } from './book/yadayim';
import { oktzin } from './book/oktzin';

const allBooks = {
  // sederZeraim,
  berakhot,
  peah,
  demai,
  kilayim,
  sheviit,
  terumot,
  maasrot,
  maaserSheni,
  challah,
  orlah,
  bikkurim,

  // sederMoed,
  shabbat,
  eruvin,
  pesachim,
  shekalim,
  yoma,
  sukkah,
  beitzah,
  roshHaShanah,
  taanit,
  megillah,
  moedKatan,
  chagigah,

  // sederNashim,
  yevamot,
  ketubot,
  nedarim,
  nazir,
  sotah,
  gittin,
  kiddushin,
  sederNezikin,
  bavaKama,
  bavaMetzia,
  bavaBatra,
  sanhedrin,
  makkot,
  shevuot,
  eduyot,
  avodahZarah,
  avot,
  horayot,

  // sederKodashim,
  zevachim,
  menachot,
  chullin,
  bekhorot,
  arakin,
  temurah,
  keritot,
  meila,
  tamid,
  middot,
  kinnim,

  // sederTaharot,
  keilim,
  ohalot,
  negaim,
  parah,
  tahorot,
  mikvaot,
  niddah,
  makhshirin,
  zavim,
  tevulYom,
  yedayim,
  oktzin
};

export default function getText(
  masechta: string,
  chapter: number | null = null,
  mishnah: number | null = null
) {
  // @ts-ignore
  const text = allBooks[masechta];

  if (chapter && mishnah) {
    const selection = text.text[chapter - 1][mishnah - 1];
    const passage = {
      masechta,
      chapter,
      mishnah,
      selection
    };
    return passage;
  }

  if (chapter) {
    const selection = text.text[chapter - 1];
    const passage = {
      masechta,
      chapter,
      mishnah,
      selection
    };
    return passage;
  }

  return text;
}
