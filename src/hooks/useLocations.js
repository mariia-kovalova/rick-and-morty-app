import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { selectFavLocationsIds } from 'redux/library/selectors';
import {
  selectLocationsError,
  selectLocationsIsLoading,
  selectLocationsItems,
} from 'redux/locations/selectors';

const selectLocationsWithIsFav = createSelector(
  [selectLocationsItems, selectFavLocationsIds],
  (locations, ids) => {
    return locations.map(location => ({
      ...location,
      isFavourite: ids.includes(location.id),
    }));
  }
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
