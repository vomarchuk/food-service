const getCategories = (state) => state.categories.entities;
const categoriesIsLoading = (state) => state.categories.isLoading;

const categoriesSelectors = {
  getCategories,
  categoriesIsLoading,
};

export default categoriesSelectors;
