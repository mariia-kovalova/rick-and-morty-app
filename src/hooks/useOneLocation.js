import { useSelector } from 'react-redux';
import {
  selectlocation,
  selectlocationError,
  selectlocationIsLoading,
} from 'redux/location/selectors';
import { selectLocationsInfo } from 'redux/locations/selectors';

export const useOneLocation = () => {
  const info = useSelector(selectLocationsInfo);
  const location = useSelector(selectlocation);
  const isLoading = useSelector(selectlocationIsLoading);
  const error = useSelector(selectlocationError);

  return {
    info,
    location,
    isLoading,
    error,
  };
};
