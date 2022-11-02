import { configureStore } from '@reduxjs/toolkit';
import { cartReducer, filtersReducer } from './cart/reducer';

export const store = configureStore({
  reducer: {
    products: cartReducer,
    filters: filtersReducer,
  },
});
