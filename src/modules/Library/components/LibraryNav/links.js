import { library } from 'shared/constants/routes';
import {
  favcharacters,
  favepisodes,
  favlocations,
} from 'shared/constants/libaryListName';

export const links = [
  { path: `/${library}/${favcharacters}`, text: 'characters' },
  { path: `/${library}/${favlocations}`, text: 'locations' },
  { path: `/${library}/${favepisodes}`, text: 'episodes' },
];
