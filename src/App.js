import React, { Component } from "react";
import "./App.css";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// Actions
import * as actionCreators from "./store/actions";
import { connect } from "react-redux";

// Components
import ProductList from "./Components/ProductList";
import ProductDetail from "./Components/ProductDetail";
import Navbar from "./Components/Navbar";

import Profile from "./Components/Profile";
import PreviousOrders from "./Components/Profile/PreviousOrders";

import RegistrationForm from "./Components/Profile/RegistrationForm";
import Cart from "./Components/Cart";
import LoginForm from "./Components/Profile/LoginForm";

class App extends Component {
  state = {
    status: 1,
    total_price: 0
  };

  componentDidMount = async () => {
    await this.props.getAllProducts();
    await this.props.checkForExpiredToken();

    if (this.props.user) {
      await this.props.getUserOrders();
      this.getCartStatusOrder();
    }
  };

  getCartStatusOrder = () => {
    const cartStatusOrder = this.props.userOrders.find(order => {
      return order.status === 1;
    });

    if (cartStatusOrder) {
      this.props.getUserCartOrder(cartStatusOrder);
    } else {
      this.props.createOrder(this.state);
    }
  };

  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div className="container-fluid my-4">
          <Switch>
            {this.props.user && (
              <Route exact path="/profile" component={Profile} />
            )}

            {this.props.user && (
              <Route
                exact
                path="/orders/detail/:orderID"
                component={PreviousOrders}
              />
            )}
            {this.props.user && <Route exact path="/cart" component={Cart} />}

            <Route exact path="/products" component={ProductList} />
            <Route path="/products/:productID" component={ProductDetail} />
            <Route exact path="/signup" component={RegistrationForm} />
            <Route exact path="/login" component={LoginForm} />
            <Redirect to="/products" />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.profileReducer.user,
    userLoading: state.profileReducer.userLoading,

    userOrders: state.profileReducer.userOrders,
    userOrdersLoading: state.profileReducer.userOrdersLoading,

    userOrderStatusCart: state.profileReducer.userOrderStatusCart,
    userOrderStatusCartLoading: state.profileReducer.userOrderStatusCartLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllProducts: () => dispatch(actionCreators.getAllProducts()),
    checkForExpiredToken: () => dispatch(actionCreators.checkForExpiredToken()),
    getUserOrders: () => dispatch(actionCreators.getUserOrders()),
    createOrder: order => dispatch(actionCreators.createOrder(order)),
    getUserCartOrder: order => dispatch(actionCreators.getUserCartOrder(order))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
