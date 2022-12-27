import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as cartActions from './cartActions';

const entities = createReducer([], {
  [cartActions.fetchCartSuccess]: (_, action) => action.payload,
  [cartActions.addProductInCart]: (state, action) => {
    return [...state, action.payload];
  },
  [cartActions.updateProductInCart]: (state, action) => {
    return [...state].map((item) => {
      if (item.productId === action.payload.productId) {
        const newAmount = item.quantity + 1;
        return { ...item, quantity: newAmount };
      }
      return item;
    });
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
// import { statusFilters } from './constants';

// import { createSlice } from '@reduxjs/toolkit';
// import { cartInitialState } from '../../helpers';

// const filtersInitialState = {
//   status: statusFilters.DEFAULT,
// };

// export const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case 'filters/setStatusFilter':
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: cartInitialState,
//   reducers: {
//     addProductInCart: (state, action) => {
//       state.push(action.payload);
//     },
//     removeProductInCart: (state, action) => {
//       // const index = state.findIndex(
//       //   (product) => product.productId === action.payload.productId
//       // );
//       // const product = state.find(
//       //   (product) => product.productId === action.payload.productId
//       // );

//       state.map((item) => {
//         if (item.productId === action.payload.productId && item.quantity > 1) {
//           item.quantity -= 1;
//         }
//         return item;
//         // console.log(product.quantity, product.productName);
//       });
//       // if ((product.quantity = 1)) state.filter(index, 1);
//     },
//     updateProductInCart: (state, action) => {
//       state.map((item) => {
//         if (item.productId === action.payload.productId) {
//           item.quantity += 1;
//         }
//         return item;
//       });
//     },
//     // prepare(array) {
//     //   return {
//     //     payload: {
//     //       array,
//     //     },
//     //   };
//     // },
//   },
// });
// export const { addProductInCart, removeProductInCart, updateProductInCart } =
//   cartSlice.actions;
// export const cartReducer = cartSlice.reducer;
