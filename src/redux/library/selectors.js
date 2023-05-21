import {
  favcharacters,
  favepisodes,
  favlocations,
  randomcharacters,
  randomepisodes,
  randomlocations,
} from 'shared/constants/libaryListName';

export const selectFavCharactersIds = state => state.library.lib[favcharacters];
export const selectFavEpisodesIds = state => state.library.lib[favepisodes];
export const selectFavLocationsIds = state => state[favlocations];
export const selectRandomCharactersIds = state =>
  state.library.lib[randomcharacters];
export const selectRandomEpisodesIds = state =>
  state.library.lib[randomepisodes];
export const selectRandomLocationsIds = state =>
  state.library.lib[randomlocations];
