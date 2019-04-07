import * as actionTypes from "../actions/types";

const initialState = {
  userCart: null
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_CART:
      console.log(
        "TCL: orderID => from GET_USER_CART reducer =>",
        action.payload.order_products
      );

      return {
        userCart: action.payload.order_products
      };
    default:
      return state;
  }
};

export default ordersReducer;
