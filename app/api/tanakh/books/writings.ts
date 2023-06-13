import { chronicles1 } from './chronicles1';
import { chronicles2 } from './chronicles2';
import { daniel } from './daniel';
import { ecclesiastes } from './ecclesiastes';
import { esther } from './esther';
import { ezra } from './ezra';
import { job } from './job';
import { lamentations } from './lamentations';
import { nehemiah } from './nehemiah';
import { proverbs } from './proverbs';
import { psalms } from './psalms';
import { ruth } from './ruth';
import { songofsongs } from './songofsongs';

export const writings = (version: string) => {
  return {
    title: 'writings',
    heTitle: 'כתובים',
    psalms: psalms(version),
    proverbs: proverbs(version),
    job: job(version),
    songofsongs: songofsongs(version),
    ruth: ruth(version),
    lamentations: lamentations(version),
    ecclesiastes: ecclesiastes(version),
    esther: esther(version),
    daniel: daniel(version),
    ezra: ezra(version),
    nehemiah: nehemiah(version),
    chronicles1: chronicles1(version),
    chronicles2: chronicles2(version)
  };
};
