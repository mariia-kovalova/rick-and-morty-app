import { useSelector } from 'react-redux';
import {
  selectEpisodesError,
  selectEpisodesIsLoading,
  selectEpisodesItems,
  selectEpisodessInfo,
} from 'redux/episodes/selectors';

export const useEpisodes = () => {
  const info = useSelector(selectEpisodessInfo);
  const episodes = useSelector(selectEpisodesItems);
  const isLoading = useSelector(selectEpisodesIsLoading);
  const error = useSelector(selectEpisodesError);

  return {
    info,
    episodes,
    isLoading,
    error,
  };
};
