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
  lib: {
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
    addToLibrary(state, { payload }) {
      state.lib[payload.libraryListName] = [
        ...state.lib[payload.libraryListName],
        payload.id,
      ];
    },
    removeFromLibrary(state, { payload }) {
      const index = state.lib[payload.libraryListName].findIndex(
        id => id === payload.id
      );
      state.lib[payload.libraryListName].splice(index, 1);
    },
  },
});

export const { addToLibrary, removeFromLibrary } = slice.actions;

export const libraryReducer = slice.reducer;
