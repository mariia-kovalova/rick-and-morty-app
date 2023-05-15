import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { locationsActions } from './thunks';

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
      .addMatcher(isAnyOf(...getActions('pending')), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(...getActions('rejected')), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addMatcher(isAnyOf(...getActions('fulfilled')), (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.info = payload?.info || null;
        state.items = payload.results;
      }),
});
export const locationsReducer = slice.reducer;
