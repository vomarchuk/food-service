import { createAction } from '@reduxjs/toolkit';

//request
export const fetchCartRequest = createAction('cart/fetchCartRequest');
//success
export const fetchCartSuccess = createAction('cart/fetchCartSuccess');
//rejected
export const fetchCartError = createAction('cart/fetchCartError');

export const addProductInCart = createAction('cart/addProductInCart');
export const updateProductInCart = createAction('cart/updateProductInCart');
