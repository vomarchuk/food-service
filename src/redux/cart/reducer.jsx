import { addProductInCart, removeProductInCart } from './actions';
import { statusFilters } from './constants';
import { combineReducers } from 'redux';

const initialState = [
  {
    productId: '1',
    productName: 'Salmon set',
    categoryId: '2',
    weight: 1050,
    chunks: 30,
    price: 155,
    smallImage: {
      x1: 'https://i.im.ge/2022/09/21/1Lg3ND.salmon-set.jpg',
      x2: 'https://i.im.ge/2022/09/21/1LgYV4.salmon-set2x.jpg',
    },
    largeImage: {
      x1: 'https://i.im.ge/2022/09/23/1hfszX.salmon-set3.jpg',
      x2: 'https://i.im.ge/2022/09/23/1hf7F8.salmon-set4.jpg',
    },
  },
];

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case addProductInCart.type: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};

const filtersInitialState = {
  status: statusFilters.DEFAULT,
};

export const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'filters/setStatusFilter':
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  products: cartReducer,
  filters: filtersReducer,
});
