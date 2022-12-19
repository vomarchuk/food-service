import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { cartReducer } from './cart/reducer';
import { deliveryReducer } from './delivery/reducer';

import reviewsReducer from './reviews/reviewsReducer';

const rootReducer = combineReducers({
  products: cartReducer,
  delivery: deliveryReducer,
});

export const store = configureStore({
  reducer: {
    reviews: reviewsReducer,
    products: cartReducer,

    delivery: deliveryReducer,
  },
});
