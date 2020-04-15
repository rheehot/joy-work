import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { STATUS } from '@/utils/constants';
import { WorldState, WorldInfo, WorldInputAction } from './types';
import worldThunk from './worldThunk';
import { getNewWorld, applyAlign } from './worldService';

const name = 'world';

const initialState: WorldState = {
  status: STATUS.IDLE,
  worldList: [],
  currentWorldList: [],
  error: '',
  lastIndex: 20,
  searchTerm: '',
  debouncedSearchTerm: '',
  currentAlign: '',
};

const worldSlice = createSlice({
  name,
  initialState,
  reducers: {
    loadMore(state: WorldState) {
      const { worldList, currentWorldList, lastIndex } = state;
      const newWorldList = worldList.slice(lastIndex, lastIndex + 20);
      state.currentWorldList = currentWorldList.concat(newWorldList);
      state.lastIndex += 20;
    },
    alignByType(state: WorldState, action: PayloadAction<string>) {
      const alignType = action.payload;
      applyAlign(state, alignType);
      state.currentAlign = alignType;
    },
    updateSearchTerm(state: WorldState, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    updateDebouncedSearchTerm(
      state: WorldState,
      action: PayloadAction<string>
    ) {
      state.debouncedSearchTerm = action.payload;
    },
    addWorld(state: WorldState, action: PayloadAction<WorldInputAction>) {
      const inputData = action.payload;
      const newWorld = getNewWorld(inputData);
      state.currentWorldList.unshift(newWorld);
    },
    deleteWorld(state: WorldState, action: PayloadAction<string>) {
      const worldCode = action.payload;
      state.currentWorldList = state.currentWorldList.filter(
        (world) => world.alpha2Code !== worldCode
      );
    },
  },
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
      state.currentWorldList = state.currentWorldList.concat(
        state.worldList.slice(0, state.lastIndex)
      );
    },
    [worldThunk.rejected.type]: (state, action: PayloadAction<string>) => {
      state.status = STATUS.REJECTED;
      state.error = action.payload;
    },
  },
});

export const WORLD = name;
export const {
  loadMore,
  alignByType,
  updateSearchTerm,
  updateDebouncedSearchTerm,
  addWorld,
  deleteWorld,
} = worldSlice.actions;
export const worldReducer = worldSlice.reducer;
