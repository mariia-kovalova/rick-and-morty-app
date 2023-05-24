import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import {
  selectEpisode,
  selectEpisodeError,
  selectEpisodeIsLoading,
} from 'redux/episode/selectors';
import { selectFavEpisodesIds } from 'redux/library/selectors';
import { addIsFavouriteToItem } from 'shared/utils/addIsFavourite';

const selectEpisodeWithIsFav = createSelector(
  [selectEpisode, selectFavEpisodesIds],
  addIsFavouriteToItem
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
