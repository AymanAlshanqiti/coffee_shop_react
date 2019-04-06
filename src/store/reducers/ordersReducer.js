import * as actionTypes from "../actions/types";

const initialState = {
  userCart: null
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_CART:
      return {
        userCart: action.payload
      };
    default:
      return state;
  }
};

export default ordersReducer;
