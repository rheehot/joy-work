import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { STATUS } from '@/utils/constants';
import { WorldState, WorldInfo } from './types';
import worldThunk from './worldThunk';

const name = 'world';

const initialState: WorldState = {
  status: STATUS.IDLE,
  worldList: null,
  error: '',
};

const worldSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: {
    [worldThunk.pending.type]: (state: WorldState) => {
      state.status = STATUS.PENDING;
    },
    [worldThunk.fulfilled.type]: (
      state,
      action: PayloadAction<WorldInfo[]>
    ) => {
      state.status = STATUS.FULFILLED;
      state.worldList = action.payload;
    },
    [worldThunk.rejected.type]: (state, action: PayloadAction<string>) => {
      state.status = STATUS.REJECTED;
      state.error = action.payload;
    },
  },
});

export const WORLD = name;
export const worldReducer = worldSlice.reducer;
