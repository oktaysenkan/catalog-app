import { ADD_BASKET } from '../constants/action-types';

const defaultState = [];

const follows = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_BASKET:
      return [...state, action.product];

    default:
      return state;
  }
};

export default follows;
