import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import {
  selectCharactersError,
  selectCharactersInfo,
  selectCharactersIsLoading,
  selectCharactersItems,
} from 'redux/characters/selectors';
import { selectFavCharactersIds } from 'redux/library/selectors';

const selectCharactersWithIsFav = createSelector(
  [selectCharactersItems, selectFavCharactersIds],
  (charactersData, ids) => {
    if (!Array.isArray(charactersData)) {
      return [
        {
          ...charactersData,
          isFavourite: ids ? ids.includes(charactersData?.id) : false,
        },
      ];
    }
    return charactersData.map(character => ({
      ...character,
      isFavourite: ids ? ids.includes(character?.id) : false,
    }));
  }
);

export const useCharacters = () => {
  const info = useSelector(selectCharactersInfo);
  const characters = useSelector(selectCharactersWithIsFav);
  const isLoading = useSelector(selectCharactersIsLoading);
  const error = useSelector(selectCharactersError);

  return {
    info,
    characters,
    isLoading,
    error,
  };
};
