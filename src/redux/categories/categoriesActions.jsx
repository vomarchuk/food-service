import { createAction } from '@reduxjs/toolkit';

//pending
export const fetchCategoriesRequest = createAction(
  'categories/fetchCategoriesRequest'
);
//fulfilled
export const fetchCategoriesSuccess = createAction(
  'categories/fetchCategoriesSuccess'
);
//rejected
export const fetchCategoriesError = createAction(
  'categories/fetchCategoriesError'
);
