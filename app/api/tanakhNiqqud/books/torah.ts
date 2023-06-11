import { genesis } from './genesis';
import { exodus } from './exodus';
import { leviticus } from './leviticus';
import { numbers } from './numbers';
import { deuteronomy } from './deuteronomy';

export const torah = {
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
};
