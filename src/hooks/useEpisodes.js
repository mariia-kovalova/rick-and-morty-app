import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import {
  selectEpisodesError,
  selectEpisodesIsLoading,
  selectEpisodesItems,
  selectEpisodessInfo,
} from 'redux/episodes/selectors';
import { selectFavEpisodesIds } from 'redux/library/selectors';
import { addIsFavouriteToList } from 'shared/utils/addIsFavourite';

const selectEpisodesWithIsFav = createSelector(
  [selectEpisodesItems, selectFavEpisodesIds],
  addIsFavouriteToList
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
