import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { selectFavLocationsIds } from 'redux/library/selectors';
import {
  selectLocationsError,
  selectLocationsIsLoading,
  selectLocationsItems,
} from 'redux/locations/selectors';
import { addIsFavouriteToList } from 'shared/utils/addIsFavourite';

const selectLocationsWithIsFav = createSelector(
  [selectLocationsItems, selectFavLocationsIds],
  addIsFavouriteToList
);

export const useLocations = () => {
  const locations = useSelector(selectLocationsWithIsFav);
  const isLoading = useSelector(selectLocationsIsLoading);
  const error = useSelector(selectLocationsError);

  return {
    locations,
    isLoading,
    error,
  };
};
