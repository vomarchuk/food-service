// import { createReducer } from '@reduxjs/toolkit';
// import { addProductInCart, removeProductInCart } from './actions';
import { statusFilters } from './constants';

import { createSlice } from '@reduxjs/toolkit';
import { cartInitialState } from '../../helpers';

// export const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case addProductInCart.type: {
//       return [...state, action.payload];
//     }
//     default:
//       return state;
//   }

// };

// export const cartReducer = createReducer(cartInitialState, {
//   [addProductInCart]: (state, action) => {
//     state.push(action.payload);
//   },
//   [removeProductInCart]: (state, action) =>
//     state.filter((product) => product.productId !== action.payload),
// });

const filtersInitialState = {
  status: statusFilters.DEFAULT,
};

export const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'filters/setStatusFilter':
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addProductInCart: (state, action) => {
      state.push(action.payload);
    },
    updateProductInCart: (state, action) => {
      state.map((item) => {
        console.log(item.productId, action.payload.productId);
        if (item.productId === action.payload.productId) {
          item.quantity += 1;
        }
      });
    },
    // prepare(array) {
    //   return {
    //     payload: {
    //       array,
    //     },
    //   };
    // },
  },
});
export const { addProductInCart, updateProductInCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
