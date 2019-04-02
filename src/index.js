import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Setting Up Router
import { BrowserRouter } from "react-router-dom";

// Setting Up Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import thunk from "redux-thunk";

import ordersReducer from "./store/reducers/ordersReducer";
import productsReducer from "./store/reducers/productsReducer";
import profileReducer from "./store/reducers/profileReducer";

// Setting Up Redux Devtools
import { compose } from "redux";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  ordersReducer: ordersReducer,
  productsReducer: productsReducer,
  profileReducer: profileReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
