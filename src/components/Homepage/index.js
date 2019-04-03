import React, { Component } from "react";

// Connectting with Redux
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

// Components
class Home extends Component {
  render() {
    return <div className="container-fluid my-4" />;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
