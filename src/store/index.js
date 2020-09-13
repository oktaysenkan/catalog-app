import { combineReducers } from 'redux';

import products from './reducers/products';
import basket from './reducers/basket';

export default combineReducers({
  products,
  basket,
});
