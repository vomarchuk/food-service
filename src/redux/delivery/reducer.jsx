import { addDeliveryInfo, removeDeliveryInfo } from './actions';
import { checkoutOptions } from './constans';
import { combineReducers } from 'redux';

const initialState = {
  firstName: '',
  lastName: '',
  deliveryMethod: checkoutOptions.DELIVERY_METHOD.COURIER,
  street: '',
  house: '',
  apartment: '',
  entrance: '',
  floor: '',
  code: '',
  paymentMethod: checkoutOptions.PAY_METHOD.CASH,
  email: '',
  comment: '',
  timeMethod: checkoutOptions.TIME_METHOD.NOW,
};

export const deliveryReducer = (state = initialState, action) => {
  switch (action.type) {
    case addDeliveryInfo.type: {
      return [...state, action.payload];
    }

    default:
      return state;
  }
};
