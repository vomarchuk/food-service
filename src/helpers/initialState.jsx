import { checkoutOptions } from '../constants';

export const deliveryInitialState = {
  firstName: '',
  lastName: '',
  deliveryMethod: checkoutOptions.DELIVERY_METHOD.COURIER,
  city: '',
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

export const cartInitialState = [];
