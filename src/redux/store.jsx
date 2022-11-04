import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './cart/reducer';

export const store = configureStore({
  reducer: rootReducer,
});
