const getProducts = (state) => state.products.entities;
const productsIsLoading = (state) => state.products.isLoading;

const productsSelectors = {
  getProducts,
  productsIsLoading,
};
export default productsSelectors;
