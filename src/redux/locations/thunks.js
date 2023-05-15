import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'api';

export const getLocations = createAsyncThunk(
  'locations/getLocations',
  async (page, { rejectWithValue }) => {
    try {
      return await API.locations.getLocations(page);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// getLocationsByIds;
export const getLocationsByIds = createAsyncThunk(
  'location/getLocationsByIds',
  async (ids, { rejectWithValue }) => {
    try {
      return await API.locations.getLocationsByIds(ids);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getLocationsByFilter = createAsyncThunk(
  'locations/getLocationsByFilter',
  async (params, { rejectWithValue }) => {
    try {
      return await API.locations.getLocationsByFilter(params);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const locationsActions = [
  getLocations,
  getLocationsByIds,
  getLocationsByFilter,
];
