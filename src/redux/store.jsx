import { configureStore } from '@reduxjs/toolkit';

import { cartReducer } from './cart/reducer';
import { deliveryReducer } from './delivery/reducer';

import categoriesReducer from './categories/categoriesReducer';
import reviewsReducer from './reviews/reviewsReducer';

export const store = configureStore({
  reducer: {
    reviews: reviewsReducer,
    categories: categoriesReducer,
    products: cartReducer,

    delivery: deliveryReducer,
  },
});
