import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getCharacters, getCharactersByFilter } from 'redux/characters/thunks';
import { charactersActions } from 'redux/characters/thunks';

const getActions = type => charactersActions.map(action => action[type]);

const initialState = {
  info: null,
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
        state.info = payload.info;
        state.items = payload.results;
      })
      .addCase(getCharacters.fulfilled, (state, { payload }) => {
        state.info = payload.info;
        state.items = [...state.items, ...payload.results];
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
