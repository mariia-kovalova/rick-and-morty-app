import { lazy } from 'react';
import { Route, Routes } from 'react-router';
import {
  all,
  character,
  characters,
  episodes,
  home,
  library,
  locations,
} from 'shared/constants/routes';
import { Layout } from 'modules/Layout';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const CharactersPage = lazy(() =>
  import('pages/CharactersPage/CharactersPage')
);
const CharacterPage = lazy(() => import('pages/CharacterPage/CharacterPage'));
const LocationsPage = lazy(() => import('pages/LocationsPage/LocationsPage'));
const EpisodesPage = lazy(() => import('pages/EpisodesPage/EpisodesPage'));
const LibraryPage = lazy(() => import('pages/LibraryPage/LibraryPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <Routes>
      <Route path={home} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={characters} element={<CharactersPage />} />
        <Route path={character} element={<CharacterPage />} />
        <Route path={locations} element={<LocationsPage />} />
        <Route path={episodes} element={<EpisodesPage />} />
        <Route path={library} element={<LibraryPage />} />
        <Route path={all} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
