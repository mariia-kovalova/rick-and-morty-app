import { createSlice } from '@reduxjs/toolkit';
import { dark } from 'shared/constants/theme';

const initialState = {
  mode: dark,
};

export const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeMode(state, { payload }) {
      state.mode = payload;
    },
  },
});

export const { setThemeMode } = slice.actions;

export const themeReducer = slice.reducer;
