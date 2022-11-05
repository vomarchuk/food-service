import { addProductInCart, removeProductInCart } from './actions';
import { statusFilters } from './constants';
import { combineReducers } from 'redux';

const initialState = [];

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
