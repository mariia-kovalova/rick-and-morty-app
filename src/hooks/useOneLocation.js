import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { selectFavLocationsIds } from 'redux/library/selectors';
import {
  selectLocation,
  selectLocationError,
  selectLocationIsLoading,
} from 'redux/location/selectors';
import { addIsFavouriteToItem } from 'shared/utils/addIsFavourite';

const selectLocationWithIsFav = createSelector(
  [selectLocation, selectFavLocationsIds],
  addIsFavouriteToItem
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
