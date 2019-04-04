import * as actionTypes from "../actions/types";

const initialState = {
  user: null,
  profile: {}
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload
      };
    case actionTypes.FETCH_PROFILE_DETAIL:
      return {
        ...state,
        profile: action.payload
      };
    case actionTypes.PROFILE_UPDATE:
      return {
        ...state,
        profile: action.payload
      };

    default:
      return state;
  }
};
export default profileReducer;
