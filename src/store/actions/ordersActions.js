import * as actionTypes from "./types";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

export const getUserCart = orderID => {
  return async dispatch => {
    try {
      const res = await instance.get(`/orders/detail/${orderID}/`);
      const cartObj = res.data;
      dispatch({
        type: actionTypes.GET_USER_CART,
        payload: cartObj
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteCartProduct = orderID => {
  return async dispatch => {
    try {
      const res = await instance.delete(`/orderproduct/delete/${orderID}/`);
      console.log("jjjjjjjjjjjjjjjjjjjjjooo", res.data);
    } catch (error) {
      console.error(error);
    }
  };
};
