import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import {
  selectCharactersError,
  selectCharactersInfo,
  selectCharactersIsLoading,
  selectCharactersItems,
} from 'redux/characters/selectors';
import { selectFavCharactersIds } from 'redux/library/selectors';

const selectTweetWithIsFollowing = createSelector(
  [selectCharactersItems, selectFavCharactersIds],
  (characters, ids) => {
    console.log(ids);
    return characters.map(character => ({
      ...character,
      isFavourire: ids.includes(character.id),
    }));
  }
);

export const useCharacters = () => {
  const info = useSelector(selectCharactersInfo);
  const characters = useSelector(selectTweetWithIsFollowing);
  const isLoading = useSelector(selectCharactersIsLoading);
  const error = useSelector(selectCharactersError);

  return {
    info,
    characters,
    isLoading,
    error,
  };
};
