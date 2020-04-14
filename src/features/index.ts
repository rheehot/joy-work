import { configureStore, combineReducers, Store } from '@reduxjs/toolkit';
import { WORLD, worldReducer } from './world/worldSlice';

const rootReducer = combineReducers({
  [WORLD]: worldReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
