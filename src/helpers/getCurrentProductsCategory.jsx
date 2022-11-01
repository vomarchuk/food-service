export const getCurrentProductsCategory = (array, currentCategoryName) => {
  const currentCategory = array.categories.find(
    (c) => c.categoryName === currentCategoryName
  );
  const CurrentProductsCategory = array.products.filter(
    (p) => p.categoryId === currentCategory?.categoryId
  );
  return CurrentProductsCategory;
};
