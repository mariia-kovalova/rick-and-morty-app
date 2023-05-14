import { useSelector } from 'react-redux';
import {
  selectCharacterError,
  selectCharacterIsLoading,
  selectCharacter,
} from 'redux/character/selectors';

export const useContacts = () => {
  const character = useSelector(selectCharacter);
  const isLoading = useSelector(selectCharacterIsLoading);
  const error = useSelector(selectCharacterError);

  return {
    character,
    isLoading,
    error,
  };
};
