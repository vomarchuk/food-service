import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { cartReducer } from './cart/reducer';
import { deliveryReducer } from './delivery/reducer';

const rootReducer = combineReducers({
  products: cartReducer,
  delivery: deliveryReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
