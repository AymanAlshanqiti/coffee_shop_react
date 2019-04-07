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
    await this.props.getAllProducts();
    await this.props.checkForExpiredToken();

    // if (this.props.user) {
    //   await this.props.getUserOrders();
    //   this.getCartStatusOrder();
    // }
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
            {this.props.user &&
              (<Route exact path="/Profile" component={Profile} />,
              <Route exact path="/cart" component={Cart} />)}
            <Route exact path="/products" component={ProductList} />
            <Route exact path="/(login|signup)" component={RegistrationForm} />
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
    getUserCartOrder: order => dispatch(actionCreators.getUserCartOrder(order)),
    getUserCart: orderID => dispatch(actionCreators.getUserCart(orderID)),
    deleteCartProduct: orderProductID =>
      dispatch(actionCreators.deleteCartProduct(orderProductID))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
