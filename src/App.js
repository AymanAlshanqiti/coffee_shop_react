import React, { Component } from "react";
import "./App.css";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// Actions
import * as actionCreators from "./store/actions";
import { connect } from "react-redux";

// Components
import Homepage from "./components/Homepage";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

class App extends Component {
  componentDidMount = () => {
    console.log("TEST");
    this.props.getAllProducts();
  };

  render() {
    return (
      <Switch>
        <Route path="/" component={Homepage} />
        <Route path="/products" component={ProductList} />
        <Route path="/products/:productID" component={ProductDetail} />
        <Redirect to="/products" />
      </Switch>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllProducts: () => dispatch(actionCreators.getAllProducts())
    // checkForExpiredToken: () => dispatch(actionCreators.checkForExpiredToken())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
