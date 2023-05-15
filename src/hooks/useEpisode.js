import { useSelector } from 'react-redux';
import {
  selectEpisode,
  selectEpisodeError,
  selectEpisodeIsLoading,
} from 'redux/episode/selectors';

export const useEpisode = () => {
  const episode = useSelector(selectEpisode);
  const isLoading = useSelector(selectEpisodeIsLoading);
  const error = useSelector(selectEpisodeError);

  return {
    episode,
    isLoading,
    error,
  };
};