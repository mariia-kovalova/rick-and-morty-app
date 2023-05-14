import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'api';

export const getCharacters = createAsyncThunk(
  'characters/getCharacters',
  async (page, { rejectWithValue }) => {
    try {
      return await API.characters.getCharacters(page);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getCharactersByFilter = createAsyncThunk(
  'characters/getByFilter',
  async (params, { rejectWithValue }) => {
    try {
      return await API.characters.getCharacterById(params);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const charactersActions = [getCharacters, getCharactersByFilter];
