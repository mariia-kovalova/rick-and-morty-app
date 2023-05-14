import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getCharacterById,
  getCharacters,
  getCharactersByFilter,
} from 'redux/characters/thunks';
import { charactersActions } from 'redux/characters/thunks';

const getActions = type => charactersActions.map(action => action[type]);

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const slice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getCharactersByFilter.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(getCharacters.fulfilled, (state, { payload }) => {
        state.items = [...state.items, ...payload];
      })
      .addMatcher(isAnyOf(...getActions('pending')), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(...getActions('rejected')), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addMatcher(isAnyOf(...getActions('fulfilled')), state => {
        state.isLoading = false;
        state.error = null;
      }),
});
export const charactersReducer = slice.reducer;
