import { createReducer, combineReducers, createSlice } from '@reduxjs/toolkit';
import { fetchProducts, fetchProductsByCategoryId } from './productsOperations';

const entities = createReducer([], {
  [fetchProductsByCategoryId.fulfilled]: (_, action) => action.payload,
});
const isLoading = createReducer(false, {
  [fetchProductsByCategoryId.pending]: () => true,
  [fetchProductsByCategoryId.fulfilled]: () => false,
  [fetchProductsByCategoryId.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchProductsByCategoryId.rejected]: (_, action) => action.payload,
  [fetchProductsByCategoryId.pending]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  error,
});
