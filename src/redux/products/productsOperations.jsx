import * as productsAPI from '../../services/products-API';
import * as productsActions from './productsActions';

export const fetchAllProducts = () => async (dispatch) => {
  dispatch(productsActions.fetchProductsRequest());
  try {
    const products = await productsAPI.fetchProducts();
    dispatch(productsActions.fetchProductsSuccess(products));
  } catch (error) {
    dispatch(productsActions.fetchProductsError(error));
  }
};

export const fetchProductsByCategoryId = (id) => async (dispatch) => {
  dispatch(productsActions.fetchProductsRequest());
  try {
    const products = await productsAPI.fetchProductsByCategoryId(id);
    dispatch(productsActions.fetchProductsSuccess(products));
  } catch (error) {
    dispatch(productsActions.fetchProductsError(error));
  }
};
