import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import {
  selectEpisode,
  selectEpisodeError,
  selectEpisodeIsLoading,
} from 'redux/episode/selectors';
import { selectFavEpisodesIds } from 'redux/library/selectors';

const selectEpisodeWithIsFav = createSelector(
  [selectEpisode, selectFavEpisodesIds],
  (episode, ids) => {
    return {
      ...episode,
      isFavourite: ids.includes(episode?.id) ?? false,
    };
  }
);

export const useOneEpisode = () => {
  const episode = useSelector(selectEpisodeWithIsFav);
  const isLoading = useSelector(selectEpisodeIsLoading);
  const error = useSelector(selectEpisodeError);

  return {
    episode,
    isLoading,
    error,
  };
};
