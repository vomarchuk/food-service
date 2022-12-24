import axios from 'axios';

export const fetchProducts = async () => {
  const { data } = await axios.get('/products');
  const result = data?.data?.result;
  return result;
};

export const fetchProductByCategoryId = async (id) => {
  const { data } = await axios.get(`/products/${id}`);
  const result = data?.data?.result;
  return result;
};
