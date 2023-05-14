import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getLocationsByFilter, locationsActions } from './thunks';

const getActions = type => locationsActions.map(action => action[type]);

const initialState = {
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
        state.items = payload;
      })
      .addCase(getActions.fulfilled, (state, { payload }) => {
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
export const locationsReducer = slice.reducer;
