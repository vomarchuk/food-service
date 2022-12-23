import axios from 'axios';
import { DEFAULT_URL } from '../constants';
axios.defaults.baseURL = DEFAULT_URL;

export const fetchCategories = async () => {
  const { data } = await axios.get('/categories');
  const result = data?.data?.result;
  return result;
};
