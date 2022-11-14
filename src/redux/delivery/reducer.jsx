import { createReducer } from '@reduxjs/toolkit';
import { addDeliveryInfo, removeDeliveryInfo } from './actions';
import { checkoutOptions } from '../../constants';

// const initialState = {
//   firstName: 'Volodymyr',
//   lastName: 'Marchuk',
//   deliveryMethod: checkoutOptions.DELIVERY_METHOD.COURIER,
//   city: 'Warsaw',
//   street: 'Karola Szymanowskiego',
//   house: '5a',
//   apartment: '46',
//   paymentMethod: checkoutOptions.PAY_METHOD.CASH,
//   email: '',
//   comment: '',
//   timeMethod: checkoutOptions.TIME_METHOD.NOW,
// };
const initialState = [];
// export const deliveryReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case addDeliveryInfo.type: {
//       return [...state, action.payload];
//     }

//     default:
//       return state;
//   }
// };
export const deliveryReducer = createReducer(initialState, {
  [addDeliveryInfo]: (state, action) => action.payload,
  [removeDeliveryInfo]: (state, action) => initialState,
});
