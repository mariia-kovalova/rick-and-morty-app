import { createSlice } from '@reduxjs/toolkit';
import { getLocationById } from './thunks';

const initialState = {
  item: null,
  isLoading: false,
  error: null,
};

export const slice = createSlice({
  name: 'character',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getLocationById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getLocationById.fulfilled, (state, { payload }) => {
        state.item = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getLocationById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.response;
      }),
});
export const locationReducer = slice.reducer;
