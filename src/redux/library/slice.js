import { createSlice } from '@reduxjs/toolkit';
import {
  favcharacters,
  favepisodes,
  favlocations,
  randomcharacters,
  randomepisodes,
  randomlocations,
} from 'shared/constants/libaryListName';

const initialState = {
  library: {
    [favcharacters]: [],
    [favepisodes]: [],
    [favlocations]: [],
    [randomcharacters]: [],
    [randomepisodes]: [],
    [randomlocations]: [],
  },
};

export const slice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    addToLibrary: (state, { payload }) => {
      state.library[payload.listName] = [
        ...state.library[payload.listName],
        payload.id,
      ];
    },
    removeFromLibrary: (state, { payload }) => {
      const index = state.library[payload.listName].findIndex(
        id => id === payload.id
      );
      state.library[payload.listName].splice(index, 1);
    },
  },
});

export const { addToLibrary, removeFromLibrary } = slice.actions;

export const libraryReducer = slice.reducer;
