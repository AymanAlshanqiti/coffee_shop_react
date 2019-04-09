import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

class PrivateRoute extends Component {
  render() {
    const { component: Component, user, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={props =>
          user ? <Component {...props} /> : <Redirect to="/welcome" />
        }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    // user: state.profileReducer.user
  };
};

export default connect(mapStateToProps)(PrivateRoute);
