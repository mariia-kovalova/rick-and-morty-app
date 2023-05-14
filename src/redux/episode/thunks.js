import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'api';

export const getEpisodeById = createAsyncThunk(
  'episode/getEpisodeById',
  async (id, { rejectWithValue }) => {
    try {
      return await API.episodes.getEpisodeById(id);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
