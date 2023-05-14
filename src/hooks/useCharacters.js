import { useSelector } from 'react-redux';
import {
  selectCharactersError,
  selectCharactersIsLoading,
  selectCharactersItems,
} from 'redux/characters/selectors';

export const useCharacters = () => {
  const characters = useSelector(selectCharactersItems);
  const isLoading = useSelector(selectCharactersIsLoading);
  const error = useSelector(selectCharactersError);

  return {
    characters,
    isLoading,
    error,
  };
};
