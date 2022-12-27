import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchReviews } from './reviewsOperations';

const entities = createReducer([], {
  [fetchReviews.fulfilled]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [fetchReviews.pending]: () => true,
  [fetchReviews.fulfilled]: () => false,
  [fetchReviews.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchReviews.rejected]: (_, action) => action.payload,
  [fetchReviews.pending]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  error,
});
