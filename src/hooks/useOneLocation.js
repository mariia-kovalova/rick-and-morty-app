import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { selectFavEpisodesIds } from 'redux/library/selectors';
import {
  selectLocation,
  selectLocationError,
  selectLocationIsLoading,
} from 'redux/location/selectors';

const selectLocationWithIsFav = createSelector(
  [selectLocation, selectFavEpisodesIds],
  (location, ids) => {
    return {
      ...location,
      isFavourite: ids.includes(location?.id) ?? false,
    };
  }
);

export const useOneLocation = () => {
  const location = useSelector(selectLocationWithIsFav);
  const isLoading = useSelector(selectLocationIsLoading);
  const error = useSelector(selectLocationError);

  return {
    location,
    isLoading,
    error,
  };
};
