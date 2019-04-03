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
import productDetail from "./components/ProductDetail";
import Navbar from "../src/components/navbar";

class App extends Component {
  componentDidMount = async () => {
    console.log("TEST");
    await this.props.getAllProducts();
  };

  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div className="container-fluid my-4">
          <Switch>
            <Route exact path="/products" component={ProductList} />
            <Route path="/products/:productID" component={productDetail} />
            <Redirect to="/products" />
          </Switch>
        </div>
      </div>
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
