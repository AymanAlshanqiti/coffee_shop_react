import * as actionTypes from "../actions/types";

const initialState = {
  userCart: null,
  userCartLoading: true,

  orderDetail: null,
  orderDetailLoading: true
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_CART:
      return {
        ...state,
        userCart: action.payload,
        userCartLoading: false
      };

    case actionTypes.GET_ORDER_DETAIL:
      return {
        ...state,
        orderDetail: action.payload,
        orderDetailLoading: false
      };
    default:
      return state;
  }
};

export default ordersReducer;
