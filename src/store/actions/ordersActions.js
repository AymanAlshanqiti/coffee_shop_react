import * as actionTypes from "./types";
import axios from "axios";
import { setErrors } from "./errorsActions";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

export const getUserOrders = () => {
  return async dispatch => {
    try {
      const res = await instance.get("orders/list/");
      const orders = res.data;

      dispatch({
        type: actionTypes.GET_USER_ORDERS,
        payload: orders
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getUserCartOrder = order => {
  return {
    type: actionTypes.GET_USER_CART_ORDER,
    payload: order
  };
};

export const createOrder = order => {
  return async dispatch => {
    try {
      const res = await instance.post("orders/create/", order);
      const newOrder = res.data;
      dispatch({
        type: actionTypes.CREATE_ORDER,
        payload: newOrder
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const addProductToCart = product => {
  return async dispatch => {
    try {
      const res = await instance.post("orderproduct/create/", product);
      const newProduct = res.data;
      console.log("TCL: newProduct", newProduct);

      dispatch({
        type: actionTypes.ADD_PRODUCT_TO_CART,
        payload: newProduct
      });
    } catch (error) {
      console.error(error);
    }
  };
};
