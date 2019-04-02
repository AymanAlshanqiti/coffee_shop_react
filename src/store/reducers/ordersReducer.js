import * as actionsTypes from "../actions/types";

const initialState = {
  msg: "Hi from msg state in OrderReducer in redux"
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.HI:
      alert(state.msg);
      return {
        ...state,
        msg: "Hi from  OrderReducer in redux"
      };
    default:
      return state;
  }
};

export default ordersReducer;
