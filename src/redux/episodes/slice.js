import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { episodesActions } from './thunks';

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
      .addMatcher(isAnyOf(...getActions('pending')), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(...getActions('rejected')), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.response;
      })
      .addMatcher(isAnyOf(...getActions('fulfilled')), (state, { payload }) => {
        state.isLoading = false;
        state.info = payload?.info || null;
        state.items = payload?.results || payload;
        state.error = null;
      }),
});
export const episodesReducer = slice.reducer;
