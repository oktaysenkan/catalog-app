import http from '../../helpers/http';
import {
  FETCH_ALL_PRODUCTS_STARTED,
  FETCH_ALL_PRODUCTS_LOADED,
  FETCH_ALL_PRODUCTS_ERROR,
  SHOW_PRODUCT_MODAL,
  CLOSE_PRODUCT_MODAL,
  FETCH_PRODUCT_DETAILS_START,
  FETCH_PRODUCT_DETAILS_ERROR,
  FETCH_PRODUCT_DETAILS_LOADED,
} from '../constants/action-types';

export const fetchAllProductsStarted = () => ({
  type: FETCH_ALL_PRODUCTS_STARTED,
});

export const fetchAllProductsLoaded = (payload) => ({
  type: FETCH_ALL_PRODUCTS_LOADED,
  products: payload,
});

export const fetchAllProductsError = (error) => ({
  type: FETCH_ALL_PRODUCTS_ERROR,
  error,
});

export const getAllProducts = () => async (dispatch) => {
  dispatch(fetchAllProductsStarted());

  try {
    const { data: products } = await http.get('products');

    await dispatch(fetchAllProductsLoaded(products));
  } catch (error) {
    if (error.response) {
      dispatch(fetchAllProductsError(error.response.data));
    }

    dispatch(fetchAllProductsError('Unknown error'));
  }
};

export const fetchProductDetailsStarted = () => ({
  type: FETCH_PRODUCT_DETAILS_START,
});

export const fetchProductDetailsLoaded = (payload) => ({
  type: FETCH_PRODUCT_DETAILS_LOADED,
  product: payload,
});

export const fetchProductDetailsError = (error) => ({
  type: FETCH_PRODUCT_DETAILS_ERROR,
  error,
});

export const fetchProductDetails = (productId) => async (dispatch) => {
  await dispatch(fetchProductDetailsStarted());

  try {
    const { data: product } = await http.get(`products/${productId}`);

    await dispatch(fetchProductDetailsLoaded(product));
  } catch (error) {
    if (error.response) {
      dispatch(fetchProductDetailsError(error.response.data));
    }

    dispatch(fetchProductDetailsError('Unknown error'));
  }
};

export const showProductModal = (payload) => async (dispatch) => {
  dispatch({
    type: SHOW_PRODUCT_MODAL,
    product: payload,
  });

  dispatch(fetchProductDetails(payload.id));
};

export const closeProductModal = () => async (dispatch) => {
  dispatch({
    type: CLOSE_PRODUCT_MODAL,
  });
};
