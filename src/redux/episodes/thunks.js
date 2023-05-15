import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'api';

export const getEpisodes = createAsyncThunk(
  'episodes/getEpisodes',
  async (page, { rejectWithValue }) => {
    try {
      return await API.episodes.getEpisodes(page);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getEpisodesByIds = createAsyncThunk(
  'episode/getEpisodesByIds',
  async (ids, { rejectWithValue }) => {
    try {
      return await API.episodes.getEpisodesByIds(ids);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getEpisodesByFilter = createAsyncThunk(
  'episodes/getEpisodesByFilter',
  async (params, { rejectWithValue }) => {
    try {
      return await API.episodes.getEpisodesByFilter(params);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const episodesActions = [
  getEpisodes,
  getEpisodesByIds,
  getEpisodesByFilter,
];
