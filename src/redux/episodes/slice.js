import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { episodesActions, getEpisodes, getEpisodesByFilter } from './thunks';

const getActions = type => episodesActions.map(action => action[type]);

const initialState = {
  info: null,
  items: [],
  isLoading: false,
  error: null,
};

export const slice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getEpisodesByFilter.fulfilled, (state, { payload }) => {
        state.info = payload.info;
        state.items = payload.results;
      })
      .addCase(getEpisodes.fulfilled, (state, { payload }) => {
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
export const episodesReducer = slice.reducer;
