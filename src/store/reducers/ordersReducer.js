import * as actionsTypes from "../actions/types";

const initialState = {
  msg: "Hi from msg state in OrderReducer in redux"
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ordersReducer;
