import { configureStore } from '@reduxjs/toolkit';

// import { cartReducer } from './cart/cartReducer';
import { deliveryReducer } from './delivery/reducer';

import categoriesReducer from './categories/categoriesReducer';
import reviewsReducer from './reviews/reviewsReducer';
import productsReducer from './products/productsReducer';
import cartReducer from './cart/cartReducer';

export const store = configureStore({
  reducer: {
    reviews: reviewsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    products: productsReducer,

    delivery: deliveryReducer,
  },
});
