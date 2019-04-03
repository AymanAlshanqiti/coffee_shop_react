import React, { Component } from "react";

// Connectting with Redux
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

// Components

class Home extends Component {
  render() {
    return (
      <div className="container-fluid my-4">
        <button onClick={this.props.hi}>Click Me!</button>
        <lable>{this.props.msg}</lable>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    msg: state.ordersReducer.msg
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hi: () => dispatch(actionCreators.hi())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
