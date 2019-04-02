import * as actionsTypes from "./types";
import axios from "axios";

export const hi = () => {
  alert("Hi from ordersActions in redux");
  return {
    type: actionsTypes.HI
  };
  // return async dispatch => {
  //   //This function gets called by Redux Thunk
  //   try {
  //     const res = await axios.post("https://api-chatr.herokuapp.com/login/", {
  //       username: "ayman",
  //       password: "1234"
  //     });
  //     const token = res.data.token;
  //     console.log("TCL: token", token);
  //     dispatch({
  //       type: actionsTypes.HI
  //     });
  //   } catch (err) {}
  // };
};
