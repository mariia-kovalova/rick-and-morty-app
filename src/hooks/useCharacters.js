import { useSelector } from 'react-redux';
import {
  selectCharactersError,
  selectCharactersInfo,
  selectCharactersIsLoading,
  selectCharactersItems,
} from 'redux/characters/selectors';

export const useCharacters = () => {
  const info = useSelector(selectCharactersInfo);
  const characters = useSelector(selectCharactersItems);
  const isLoading = useSelector(selectCharactersIsLoading);
  const error = useSelector(selectCharactersError);

  return {
    info,
    characters,
    isLoading,
    error,
  };
};
