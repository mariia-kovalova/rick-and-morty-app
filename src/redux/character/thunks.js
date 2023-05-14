import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'api';

export const getCharacterById = createAsyncThunk(
  'character/getCharacterById',
  async (id, { rejectWithValue }) => {
    try {
      return await API.characters.getCharacterById(id);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
