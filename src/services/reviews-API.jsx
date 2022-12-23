import axios from 'axios';
// axios.defaults.baseURL = 'https://food-service-api.herokuapp.com/api';

export const fetchReviews = async () => {
  const { data } = await axios.get(`/reviews`);
  const result = data?.data?.result;
  return result;
};

export const fetchReviewById = async (reviewId) => {
  const { data } = await axios.get(`/reviews/${reviewId}`);
  const result = data?.data?.result;
  return result;
};
