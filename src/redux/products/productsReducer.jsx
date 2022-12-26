import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as productsActions from './productsActions';

const entities = createReducer([], {
  [productsActions.fetchProductsSuccess]: (_, action) => action.payload,
});
const isLoading = createReducer(false, {
  [productsActions.fetchProductsRequest]: () => true,
  [productsActions.fetchProductsSuccess]: () => false,
  [productsActions.fetchProductsError]: () => false,
});

const error = createReducer(null, {
  [productsActions.fetchProductsError]: (_, action) => action.payload,
  [productsActions.fetchProductsRequest]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  error,
});
