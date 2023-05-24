import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import {
  selectCharacterError,
  selectCharacterIsLoading,
  selectCharacter,
} from 'redux/character/selectors';
import { selectFavCharactersIds } from 'redux/library/selectors';
import { addIsFavouriteToItem } from 'shared/utils/addIsFavourite';

const selectCharacterWithIsFav = createSelector(
  [selectCharacter, selectFavCharactersIds],
  addIsFavouriteToItem
);

export const useOneCharacter = () => {
  const character = useSelector(selectCharacterWithIsFav);
  const isLoading = useSelector(selectCharacterIsLoading);
  const error = useSelector(selectCharacterError);

  return {
    character,
    isLoading,
    error,
  };
};
