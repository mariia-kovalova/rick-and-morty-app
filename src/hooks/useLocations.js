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
        {
          ...locationsData,
          isFavourite: ids ? ids.includes(locationsData?.id) : false,
        },
      ];
    }
    return locationsData.map(location => ({
      ...location,
      isFavourite: ids ? ids.includes(location?.id) : false,
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
