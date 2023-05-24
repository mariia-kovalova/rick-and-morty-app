import { useSelector } from 'react-redux';
import {
  selectFavCharactersIds,
  selectFavEpisodesIds,
  selectFavLocationsIds,
  selectRandomCharactersIds,
  selectRandomEpisodesIds,
  selectRandomLocationsIds,
} from 'redux/library/selectors';

export const useLibrary = () => {
  const favCharactersIds = useSelector(selectFavCharactersIds);
  const favEpisodesIds = useSelector(selectFavEpisodesIds);
  const favLocationsIds = useSelector(selectFavLocationsIds);

  const randomCharactersIds = useSelector(selectRandomCharactersIds);
  const randomEpisodesIds = useSelector(selectRandomEpisodesIds);
  const randomLocationsIds = useSelector(selectRandomLocationsIds);

  return {
    favCharactersIds,
    favEpisodesIds,
    favLocationsIds,
    randomCharactersIds,
    randomEpisodesIds,
    randomLocationsIds,
  };
};
