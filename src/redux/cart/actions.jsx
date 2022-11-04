import { createAction } from '@reduxjs/toolkit';

export const addProductInCart = createAction('cart/addProductInCart');

export const removeProductInCart = createAction('cart/removeProductInCart');

export const deleteProduct = (productId) => {
  return {
    type: 'cart/deleteProduct',
    payload: productId,
  };
};
export const setStatusFilter = (value) => {
  return { type: 'cart/setStatusFilter', payload: value };
};
