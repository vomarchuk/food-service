import { createAsyncThunk } from '@reduxjs/toolkit';
import * as productsAPI from '../../services/products-API';

// export const fetchProducts = (id) => async (dispatch) => {
//   dispatch(productsActions.fetchProductsRequest());
//   try {
//     const products = await productsAPI.fetchProducts();
//     dispatch(productsActions.fetchProductsSuccess(products));
//   } catch (error) {
//     dispatch(productsActions.fetchProductsError(error));
//   }
// };

export const fetchProductsByCategoryId = createAsyncThunk(
  'products/fetchProductsByCategoryId',
  async (id) => {
    const result = await productsAPI.fetchProductByCategoryId(id);
    return result;
  }
);

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const result = await productsAPI.fetchProducts();
    return result;
  }
);
