import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAuto} from '../api/autoAPI';

export const fetchAuto = createAsyncThunk(
  'auto/fetch',
   async (_, { rejectWithValue }) => {
  try {
    const { data } = await getAuto();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

