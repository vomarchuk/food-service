import axios from 'axios';
axios.defaults.baseURL = 'https://food-service-api.herokuapp.com/api';

export const fetchCategories = async () => {
  const { data } = await axios.get('/categories');
  const result = data?.data?.result;
  return result;
};
