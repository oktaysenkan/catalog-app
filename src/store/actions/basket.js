import { ADD_BASKET } from '../constants/action-types';

export const addBasket = (product) => async (dispatch) => {
  dispatch({
    type: ADD_BASKET,
    product,
  });
};
