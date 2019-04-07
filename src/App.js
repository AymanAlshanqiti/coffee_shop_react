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

class App extends Component {
  componentDidMount = async () => {
    await this.props.getAllProducts();
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
            <Route path="/products/:productID" component={ProductDetail} />
            <Redirect to="/products" />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllProducts: () => dispatch(actionCreators.getAllProducts()),
    checkForExpiredToken: () => dispatch(actionCreators.checkForExpiredToken())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
