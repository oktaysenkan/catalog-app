import {
  FETCH_ALL_PRODUCTS_STARTED,
  FETCH_ALL_PRODUCTS_LOADED,
  FETCH_ALL_PRODUCTS_ERROR,
  SHOW_PRODUCT_MODAL,
  CLOSE_PRODUCT_MODAL,
  FETCH_PRODUCT_DETAILS_START,
  FETCH_PRODUCT_DETAILS_LOADED,
  FETCH_PRODUCT_DETAILS_ERROR,
} from '../constants/action-types';

const defaultState = {
  products: [],
  loading: true,
  error: null,
  showingProduct: {
    loading: true,
    error: null,
    hidden: true,
    product: null,
  },
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

    case SHOW_PRODUCT_MODAL:
      return {
        ...state,
        showingProduct: {
          product: action.product,
          hidden: false,
        },
      };

    case CLOSE_PRODUCT_MODAL:
      return {
        ...state,
        showingProduct: {
          ...state.showingProduct,
          hidden: true,
        },
      };

    case FETCH_PRODUCT_DETAILS_START:
      return {
        ...state,
        showingProduct: {
          ...state.showingProduct,
          loading: true,
        },
      };

    case FETCH_PRODUCT_DETAILS_LOADED:
      return {
        ...state,
        showingProduct: {
          ...state.showingProduct,
          product: action.product,
          loading: false,
        },
      };

    case FETCH_PRODUCT_DETAILS_ERROR:
      return {
        ...state,
        showingProduct: {
          ...state.showingProduct,
          loading: false,
          error: action.error,
        },
      };

    default:
      return state;
  }
};

export default follows;
