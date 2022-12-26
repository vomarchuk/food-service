import { configureStore } from '@reduxjs/toolkit';

import { cartReducer } from './cart/reducer';
import { deliveryReducer } from './delivery/reducer';

import categoriesReducer from './categories/categoriesReducer';
import reviewsReducer from './reviews/reviewsReducer';
import productsReducer from './products/productsReducer';

export const store = configureStore({
  reducer: {
    reviews: reviewsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    products: productsReducer,

    delivery: deliveryReducer,
  },
});
