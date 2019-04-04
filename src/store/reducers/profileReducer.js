import * as actionTypes from "../actions/types";

const initialState = {
  order: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ORDER_DETAIL:
      console.log("Alzhrani");

      return {
        ...state,
        order: action.payload
      };
    default:
      return state;
  }
};

export default profileReducer;
