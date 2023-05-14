import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getLocationsByFilter, locationsActions } from './thunks';

const getActions = type => locationsActions.map(action => action[type]);

const initialState = {
  info: null,
  items: [],
  isLoading: false,
  error: null,
};

export const slice = createSlice({
  name: 'locations',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getLocationsByFilter.fulfilled, (state, { payload }) => {
        state.info = payload.info;
        state.items = payload.results;
      })
      .addCase(getActions.fulfilled, (state, { payload }) => {
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
export const locationsReducer = slice.reducer;
