export const addProduct = (product) => {
  return {
    type: 'cart/addProduct',
    payload: {
      ...product,
    },
  };
};

export const deleteProduct = (productId) => {
  return {
    type: 'cart/deleteProduct',
    payload: productId,
  };
};
export const setStatusFilter = (value) => {
  return { type: 'cart/setStatusFilter', payload: value };
};
