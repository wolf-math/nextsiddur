import { genesis } from './genesis';
import { exodus } from './exodus';
import { leviticus } from './leviticus';
import { numbers } from './numbers';
import { deuteronomy } from './deuteronomy';

export const torah = (version: string) => {
  return {
    title: 'torah',
    heTitle: 'תּוֹרָה',
    genesis: genesis(version),
    exodus: exodus(version),
    leviticus: leviticus(version),
    numbers: numbers(version),
    deuteronomy: deuteronomy(version)
  };
};
