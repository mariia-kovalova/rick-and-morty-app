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
  (locationsData, ids) => {
    if (!Array.isArray(locationsData)) {
      return [
        { ...locationsData, isFavourite: ids.includes(locationsData.id) },
      ];
    }
    return locationsData.map(location => ({
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
