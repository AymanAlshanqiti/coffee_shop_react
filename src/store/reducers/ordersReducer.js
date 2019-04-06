import * as actionTypes from "../actions/types";

const initialState = {
  userCart: null
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_CART:
      console.log(
        "TCL: orderID => from GET_USER_CART reducer =>",
        action.payload
      );

      return {
        userCart: action.payload
      };
    default:
      return state;
  }
};

export default ordersReducer;
