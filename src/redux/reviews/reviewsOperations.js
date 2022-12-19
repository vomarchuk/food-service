import * as reviewsAPI from '../../services/reviews-API';
import * as reviewsActions from './reviewsActions';

export const fetchReviews = () => async (dispatch) => {
  dispatch(reviewsActions.fetchReviewsRequest());
  try {
    const reviews = await reviewsAPI.fetchReviews();
    dispatch(reviewsActions.fetchReviewsSuccess(reviews));
  } catch (error) {
    dispatch(reviewsActions.fetchReviewsError(error));
  }
};
