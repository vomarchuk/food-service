import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as categoriesActions from './categoriesActions';

const entities = createReducer([], {
  [categoriesActions.fetchCategoriesSuccess]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [categoriesActions.fetchCategoriesRequest]: () => true,
  [categoriesActions.fetchCategoriesSuccess]: () => false,
  [categoriesActions.fetchCategoriesError]: () => false,
});

const error = createReducer(null, {
  [categoriesActions.fetchCategoriesError]: (_, action) => action.payload,
  [categoriesActions.fetchCategoriesRequest]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  error,
});
