import * as categoriesAPI from '../../services/categories-API';

import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchCategories = () => async (dispatch) => {
//   dispatch(categoriesActions.fetchCategoriesRequest());
//   try {
//     const categories = await categoriesAPI.fetchCategories();
//     dispatch(categoriesActions.fetchCategoriesSuccess(categories));
//   } catch (error) {
//     dispatch(categoriesActions.fetchCategoriesError(error));
//   }
// };

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const result = await categoriesAPI.fetchCategories();
    return result;
  }
);
