import * as actionTypes from "./types";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

export const fetchOrderDetail = orderID => {
  //   console.log("HI Mishal");

  return async dispatch => {
    try {
      const res = await instance.get(`orders/detail/${orderID}/`);
      const order = res.data;

      dispatch({
        type: actionTypes.FETCH_ORDER_DETAIL,
        payload: order
      });
    } catch (error) {
      console.error(error.response);
    }
  };
};
