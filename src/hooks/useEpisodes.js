import { useSelector } from 'react-redux';
import {
  selectEpisodesError,
  selectEpisodesIsLoading,
  selectEpisodesItems,
} from 'redux/episodes/selectors';

export const useEpisodes = () => {
  const episodes = useSelector(selectEpisodesItems);
  const isLoading = useSelector(selectEpisodesIsLoading);
  const error = useSelector(selectEpisodesError);

  return {
    episodes,
    isLoading,
    error,
  };
};
