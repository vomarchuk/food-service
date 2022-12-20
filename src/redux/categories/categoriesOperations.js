import * as categoriesAPI from '../../services/categories-API';
import * as categoriesActions from './categoriesActions';

export const fetchCategories = () => async (dispatch) => {
  dispatch(categoriesActions.fetchCategoriesRequest());
  try {
    const categories = await categoriesAPI.fetchCategories();
    dispatch(categoriesActions.fetchCategoriesSuccess(categories));
  } catch (error) {
    dispatch(categoriesActions.fetchCategoriesError(error));
  }
};
