import * as actionTypes from "./types";
import axios from "axios";
import jwt_decode from "jwt-decode";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

export const checkForExpiredToken = () => {
  return async dispatch => {
    const token = await localStorage.getItem("token");

    if (token) {
      const currentTime = Date.now() / 1000;

      const user = jwt_decode(token);

      //   console.log((user.exp - currentTime) / 60);

      if (user.exp >= currentTime) {
        setAuthToken(token);
        dispatch(setCurrentUser(user));
      } else {
        dispatch(logout());
      }
    }
  };
};

const setAuthToken = async token => {
  if (token) {
    await localStorage.setItem("token", token);
    axios.defaults.headers.common.Authorization = `jwt ${token}`;
  } else {
    await localStorage.removeItem("token");
    delete axios.defaults.headers.common.Authorization;
  }
};

const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});

export const login = (userData, history) => {
  return async dispatch => {
    try {
      // let response = await instance.post("login/", userData);
      // let user = response.data;
      const token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6Im9tZXIiLCJleHAiOjE1NTQ1MzAwOTYsImVtYWlsIjoiIn0.Hn9tQ9kPV2e_dIr8S9GYQmo92QS2C5Iewvkn_INwAmw";
      let decodedUser = jwt_decode(token);

      setAuthToken(token);
      dispatch(setCurrentUser(decodedUser));
      history.push("Profile");
    } catch (error) {
      console.error(error);
    }
  };
};

export const signup = (userData, history) => {
  return async dispatch => {
    try {
      await instance.post("register/", userData);
      dispatch(login(userData, history));
    } catch (error) {
      console.error(error);
    }
  };
};
export const logout = () => {
  setAuthToken();
  return setCurrentUser();
};

export const fetchProfileDetail = profileID => {
  return async dispatch => {
    try {
      const res = await instance.post(`profile/detail/${profileID}/`);

      const userprofile = res.data;
      dispatch({
        type: actionTypes.FETCH_PROFILE_DETAIL,
        payload: userprofile
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const ProfileUpdate = profilePK => {
  return async dispatch => {
    try {
      const res = await instance.put(`profile/update/${profilePK}/`);
      const profile = res.data;
      dispatch({
        type: actionTypes.PROFILE_UPDATE,
        payload: profile
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchOrderDetail = orderID => {
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
