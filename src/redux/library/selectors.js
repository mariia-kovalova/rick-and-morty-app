import {
  favcharacters,
  favepisodes,
  favlocations,
  randomcharacters,
  randomepisodes,
  randomlocations,
} from 'shared/constants/libaryListName';

export const selecFavCharactersIds = state => state.library[favcharacters];
export const selecFavEpisodesIds = state => state.library[favepisodes];
export const selecFavLocationsIds = state => state[favlocations];
export const selecRandomCharactersIds = state =>
  state.library[randomcharacters];
export const selecRandomEpisodesIds = state => state.library[randomepisodes];
export const selecRandomLocationsIds = state => state.library[randomlocations];
