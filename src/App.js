import React, { Component } from "react";
import "./App.css";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// Actions
import * as actionCreators from "./store/actions";
import { connect } from "react-redux";

// Components
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Navbar from "../src/components/navbar";
import Profile from "../src/components/profiles";
import RegistrationForm from "./components/profiles/RegistrationForm";
import Cart from "../src/components/cart";


class App extends Component {
  state = {
    state: 1,
    total_price: 0
  };

  componentDidMount = async () => {
    await this.props.login();
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
  componentDidMount() {
    this.props.checkForExpiredToken();
  }

  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div className="container-fluid my-4">
          <Switch>
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/products" component={ProductList} />
            <Route exact path="/(login|signup)" component={RegistrationForm} />
            <Route exact path="/cart" component={Cart} />
            <Route path="/products/:productID" component={ProductDetail} />
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
    userOrders: state.profileReducer.userOrders
  };
};

const mapDispatchToProps = dispatch => {
  return {

    login: () => dispatch(actionCreators.login()),
    checkForExpiredToken: () => dispatch(actionCreators.checkForExpiredToken())
    getAllProducts: () => dispatch(actionCreators.getAllProducts()),
    getUserOrders: () => dispatch(actionCreators.getUserOrders()),
    getUserCartOrder: order => dispatch(actionCreators.getUserCartOrder(order)),
    createOrder: order => dispatch(actionCreators.createOrder(order))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
