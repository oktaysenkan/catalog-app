import {
  FETCH_ALL_PRODUCTS_STARTED,
  FETCH_ALL_PRODUCTS_LOADED,
  FETCH_ALL_PRODUCTS_ERROR,
} from '../constants/action-types';

const defaultState = {
  products: [],
  loading: true,
  error: null,
};

const follows = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS_STARTED:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ALL_PRODUCTS_LOADED:
      return {
        ...state,
        loading: false,
        products: action.products,
      };

    case FETCH_ALL_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default follows;
