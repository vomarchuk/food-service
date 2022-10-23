import { IBeckEnd } from '../interfaces/goods.interface';

export const getCurrentProductsCategory = (
  array: IBeckEnd,
  currentCategoryName: string | undefined
) => {
  const currentCategory = array.categories.find(
    (c) => c.categoryName === currentCategoryName
  );
  const CurrentProductsCategory = array.products.filter(
    (p) => p.categoryId === currentCategory?.categoryId
  );
  return CurrentProductsCategory;
};
