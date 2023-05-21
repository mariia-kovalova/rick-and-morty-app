import { createSlice } from '@reduxjs/toolkit';
import { getCharacterById } from 'redux/character/thunks';

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
      .addCase(getCharacterById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCharacterById.fulfilled, (state, { payload }) => {
        state.item = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCharacterById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.response;
      }),
});
export const characterReducer = slice.reducer;
