import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchProducts,
  fetchProductsByCategoryId,
  fetchProductById,
} from './productsOperations';

const entities = createReducer([], {
  [fetchProductsByCategoryId.fulfilled]: (_, action) => action.payload,
  [fetchProducts.fulfilled]: (_, action) => action.payload,
  [fetchProductById.fulfilled]: (_, action) => action.payload,
});
const isLoading = createReducer(false, {
  [fetchProductsByCategoryId.pending]: () => true,
  [fetchProductsByCategoryId.fulfilled]: () => false,
  [fetchProductsByCategoryId.rejected]: () => false,

  [fetchProducts.pending]: () => true,
  [fetchProducts.fulfilled]: () => false,
  [fetchProducts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchProductsByCategoryId.rejected]: (_, action) => action.payload,
  [fetchProductsByCategoryId.pending]: () => null,

  [fetchProducts.rejected]: (_, action) => action.payload,
  [fetchProducts.pending]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  error,
});
