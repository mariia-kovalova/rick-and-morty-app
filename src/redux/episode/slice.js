import { createSlice } from '@reduxjs/toolkit';
import { getEpisodeById } from './thunks';

const initialState = {
  item: null,
  isLoading: false,
  error: null,
};

export const slice = createSlice({
  name: 'episode',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getEpisodeById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getEpisodeById.fulfilled, (state, { payload }) => {
        state.item = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getEpisodeById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});
export const episodeReducer = slice.reducer;
