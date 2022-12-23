import { createAction } from '@reduxjs/toolkit';

//pending
export const fetchProductsActions = createAction(
  'products/fetchProductsRequest'
);
//fulfilled
export const fetchProductsSuccess = createAction(
  'products/fetchProductsSuccess'
);
//rejected
export const fetchProductsError = createAction('products/fetchProductsError');
