import { useSelector } from 'react-redux';
import {
  selectCharacterError,
  selectCharacterIsLoading,
  selectCharacter,
} from 'redux/character/selectors';

export const useOneCharacter = () => {
  const character = useSelector(selectCharacter);
  const isLoading = useSelector(selectCharacterIsLoading);
  const error = useSelector(selectCharacterError);

  return {
    character,
    isLoading,
    error,
  };
};
