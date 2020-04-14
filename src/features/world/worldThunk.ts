import { createAsyncThunk } from '@reduxjs/toolkit';
import worldAPI from './worldAPI';

const worldThunk = createAsyncThunk(
  'world/thunk',
  async (_, { rejectWithValue }) => {
    try {
      const worldList = await worldAPI();
      return worldList;
    } catch (e) {
      return rejectWithValue('world API error');
    }
  }
);

export default worldThunk;
