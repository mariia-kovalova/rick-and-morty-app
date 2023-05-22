import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import {
  selectEpisodesError,
  selectEpisodesIsLoading,
  selectEpisodesItems,
  selectEpisodessInfo,
} from 'redux/episodes/selectors';
import { selectFavEpisodesIds } from 'redux/library/selectors';

const selectEpisodesWithIsFav = createSelector(
  [selectEpisodesItems, selectFavEpisodesIds],
  (episodes, ids) => {
    return episodes.map(episode => ({
      ...episode,
      isFavourite: ids.includes(episode.id),
    }));
  }
);

export const useEpisodes = () => {
  const info = useSelector(selectEpisodessInfo);
  const episodes = useSelector(selectEpisodesWithIsFav);
  const isLoading = useSelector(selectEpisodesIsLoading);
  const error = useSelector(selectEpisodesError);

  return {
    info,
    episodes,
    isLoading,
    error,
  };
};
