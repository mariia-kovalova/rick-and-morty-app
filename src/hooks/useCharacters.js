import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import {
  selectCharactersError,
  selectCharactersInfo,
  selectCharactersIsLoading,
  selectCharactersItems,
} from 'redux/characters/selectors';
import { selectFavCharactersIds } from 'redux/library/selectors';
import { addIsFavouriteToList } from 'shared/utils/addIsFavourite';

const selectCharactersWithIsFav = createSelector(
  [selectCharactersItems, selectFavCharactersIds],
  addIsFavouriteToList
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
