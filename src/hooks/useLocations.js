import { useSelector } from 'react-redux';
import {
  selectLocationsError,
  selectLocationsIsLoading,
  selectLocationsItems,
} from 'redux/locations/selectors';

export const useLocations = () => {
  const locations = useSelector(selectLocationsItems);
  const isLoading = useSelector(selectLocationsIsLoading);
  const error = useSelector(selectLocationsError);

  return {
    locations,
    isLoading,
    error,
  };
};
