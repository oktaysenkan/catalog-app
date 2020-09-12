import http from '../../helpers/http';
import {
  FETCH_ALL_PRODUCTS_STARTED,
  FETCH_ALL_PRODUCTS_LOADED,
  FETCH_ALL_PRODUCTS_ERROR,
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

    dispatch('Unknown error');
  }
};
