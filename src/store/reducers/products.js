import {
  FETCH_ALL_PRODUCTS_STARTED,
  FETCH_ALL_PRODUCTS_LOADED,
  FETCH_ALL_PRODUCTS_ERROR,
  SHOW_PRODUCT_MODAL,
  CLOSE_PRODUCT_MODAL,
  FETCH_PRODUCT_DETAILS_START,
  FETCH_PRODUCT_DETAILS_LOADED,
  FETCH_PRODUCT_DETAILS_ERROR,
  FILTER_TYPE,
  FILTER_BODY_SIZE,
  FILTER_COLOR,
  FILTER_PRICE,
  RESET_FILTERS,
  SET_ORDER_BY,
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
  filters: {
    type: null,
    color: null,
    bodySize: null,
    price: 0,
  },
  orderBy: 'createdAt',
  orderDirection: 'desc',
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

    case FILTER_TYPE:
      return {
        ...state,
        filters: {
          ...state.filters,
          type: action.productType,
        },
      };

    case FILTER_BODY_SIZE:
      return {
        ...state,
        filters: {
          ...state.filters,
          bodySize: action.bodySize,
        },
      };

    case FILTER_COLOR:
      return {
        ...state,
        filters: {
          ...state.filters,
          color: action.color,
        },
      };

    case FILTER_PRICE:
      return {
        ...state,
        filters: {
          ...state.filters,
          price: action.price,
        },
      };

    case RESET_FILTERS:
      return {
        ...state,
        filters: defaultState.filters,
      };

    case SET_ORDER_BY: {
      const isSameBefore = action.orderBy === state.orderBy;

      let orderDirection;

      if (isSameBefore) {
        orderDirection = state.orderDirection === 'asc' ? 'desc' : 'asc';
      } else {
        orderDirection = 'desc';
      }

      return {
        ...state,
        orderBy: action.orderBy,
        orderDirection,
      };
    }

    default:
      return state;
  }
};

export default follows;
