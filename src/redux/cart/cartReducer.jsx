import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as cartActions from './cartActions';

const entities = createReducer([], {
  [cartActions.fetchCartSuccess]: (_, action) => action.payload,
  [cartActions.addProductInCart]: (state, action) => {
    return [...state, action.payload];
  },
  [cartActions.updateProductInCart]: (state, action) => {
    return [...state].map((item) => {
      if (item['_id'] === action.payload['_id']) {
        const newAmount = item.quantity + 1;
        return { ...item, quantity: newAmount };
      }
      return item;
    });
  },
  [cartActions.removeProductInCart]: (state, action) => {
    const removeProductId = action.payload['_id'];

    if (action.payload.quantity > 1) {
      return [...state].map((item) => {
        if (item['_id'] === removeProductId && item.quantity > 1) {
          const newAmount = item.quantity - 1;
          return { ...item, quantity: newAmount };
        }
        return item;
      });
    }
    if (action.payload.quantity <= 1) {
      return [...state].filter(
        ({ _id: productId }) => productId !== removeProductId
      );
    }
  },
});

const error = createReducer(null, {
  [cartActions.fetchCartError]: (_, action) => action.payload,
  [cartActions.fetchCartRequest]: () => null,
});

export default combineReducers({
  entities,
  error,
});
