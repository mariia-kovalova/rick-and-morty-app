export const ROUTES = {
  basename: '/rick-and-morty-app',
  home: '/',
  characters: 'characters',
  character: 'characters/:characterId',
  locations: 'locations',
  location: 'locations/:locationId',
  episodes: 'episodes',
  episode: 'episodes/:episodeId',
  library: 'library',
  favourite: ':listName',
  all: '*',
};

export const {
  basename,
  home,
  characters,
  character,
  locations,
  location,
  episodes,
  episode,
  library,
  favourite,
  all,
} = ROUTES;
