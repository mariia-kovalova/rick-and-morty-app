import { favcharacters } from 'shared/constants/libaryListName';
import {
  characters,
  episodes,
  library,
  locations,
} from 'shared/constants/routes';

export const navLinksArr = [
  {
    path: characters,
    name: 'Characters',
  },
  {
    path: locations,
    name: 'Locations',
  },
  {
    path: episodes,
    name: 'Episodes',
  },
  {
    path: `${library}/${favcharacters}`,
    name: 'Library',
  },
];
