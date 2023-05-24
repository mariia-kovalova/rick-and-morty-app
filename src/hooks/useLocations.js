import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { selectFavLocationsIds } from 'redux/library/selectors';
import {
  selectLocationsError,
  selectLocationsInfo,
  selectLocationsIsLoading,
  selectLocationsItems,
} from 'redux/locations/selectors';
import { addIsFavouriteToList } from 'shared/utils/addIsFavourite';

const selectLocationsWithIsFav = createSelector(
  [selectLocationsItems, selectFavLocationsIds],
  addIsFavouriteToList
);

export const useLocations = () => {
  const info = useSelector(selectLocationsInfo);
  const locations = useSelector(selectLocationsWithIsFav);
  const isLoading = useSelector(selectLocationsIsLoading);
  const error = useSelector(selectLocationsError);

  return {
    info,
    locations,
    isLoading,
    error,
  };
};
