import { torah } from './torah';
import { prophets } from './prophets';
import { writings } from './writings';

export const tanakh = (version: string) => {
  return {
    title: 'tanakh',
    heTitle: 'תָּנָ״ךְ',
    torah: torah(version),
    prophets: prophets(version),
    writings: writings(version)
  };
};
