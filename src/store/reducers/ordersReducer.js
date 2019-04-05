import * as actionTypes from "../actions/types";

const initialState = {
  userOrders: [],
  userOrderStatusCart: null,
  userOrderProduct: []
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_ORDERS:
      return {
        ...state,
        userOrders: action.payload
      };

    case actionTypes.GET_USER_CART_ORDER:
      return {
        ...state,
        userOrderStatusCart: action.payload
      };

    case actionTypes.CREATE_ORDER:
      return {
        ...state,
        userOrderStatusCart: action.payload
      };

    case actionTypes.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        userOrderProduct: action.payload
      };

    default:
      return state;
  }
};

export default ordersReducer;
