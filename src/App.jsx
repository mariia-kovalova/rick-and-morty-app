import { lazy } from 'react';
import { Route, Routes } from 'react-router';
import {
  home,
  character,
  characters,
  location,
  locations,
  episodes,
  episode,
  library,
  favourite,
  all,
} from 'shared/constants/routes';
import { Layout } from 'modules/Layout';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const CharactersPage = lazy(() =>
  import('pages/CharactersPage/CharactersPage')
);
const CharacterPage = lazy(() => import('pages/CharacterPage/CharacterPage'));
const LocationsPage = lazy(() => import('pages/LocationsPage/LocationsPage'));
const LocationPage = lazy(() => import('pages/LocationPage/LocationPage'));
const EpisodesPage = lazy(() => import('pages/EpisodesPage/EpisodesPage'));
const EpisodePage = lazy(() => import('pages/EpisodePage/EpisodePage'));
const LibraryPage = lazy(() => import('pages/LibraryPage/LibraryPage'));
const FavouritePage = lazy(() => import('pages/FavouritePage/FavouritePage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <Routes>
      <Route path={home} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={characters} element={<CharactersPage />} />
        <Route path={character} element={<CharacterPage />} />
        <Route path={locations} element={<LocationsPage />} />
        <Route path={location} element={<LocationPage />} />
        <Route path={episodes} element={<EpisodesPage />} />
        <Route path={episode} element={<EpisodePage />} />
        <Route path={library} element={<LibraryPage />}>
          <Route path={favourite} element={<FavouritePage />} />
        </Route>
        <Route path={all} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
