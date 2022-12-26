const getReviews = (state) => state.reviews.entities;
const reviewsIsLoading = (state) => state.reviews.isLoading;

const reviewsSelectors = {
  getReviews,
  reviewsIsLoading,
};
export default reviewsSelectors;
