import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as reviewsActions from './reviewsActions';

const entities = createReducer([], {
  [reviewsActions.fetchReviewsSuccess]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [reviewsActions.fetchReviewsRequest]: () => true,
  [reviewsActions.fetchReviewsSuccess]: () => false,
  [reviewsActions.fetchReviewsError]: () => false,
});

const error = createReducer(null, {
  [reviewsActions.fetchReviewsError]: (_, action) => action.payload,
  [reviewsActions.fetchReviewsRequest]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  error,
});
