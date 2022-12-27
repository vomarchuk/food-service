import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchCategories } from './categoriesOperations';

const entities = createReducer([], {
  [fetchCategories.fulfilled]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [fetchCategories.pending]: () => true,
  [fetchCategories.fulfilled]: () => false,
  [fetchCategories.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchCategories.rejected]: (_, action) => action.payload,
  [fetchCategories.pending]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  error,
});
