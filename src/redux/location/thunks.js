import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'api';

export const getLocationById = createAsyncThunk(
  'location/getLocationById',
  async (id, { rejectWithValue }) => {
    try {
      return await API.locations.getLocationById(id);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
