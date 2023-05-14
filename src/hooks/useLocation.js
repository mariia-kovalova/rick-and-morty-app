import { useSelector } from 'react-redux';
import {
  selectlocation,
  selectlocationError,
  selectlocationIsLoading,
} from 'redux/location/selectors';

export const useLocation = () => {
  const location = useSelector(selectlocation);
  const isLoading = useSelector(selectlocationIsLoading);
  const error = useSelector(selectlocationError);

  return {
    location,
    isLoading,
    error,
  };
};
