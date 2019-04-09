import React, { Component } from "react";
import * as actionCreators from "../store/actions";
import { connect } from "react-redux";
class ProfileUpdate extends Component {
  render() {
    return <div />;
  }
}

import React, { Component } from "react";
import { connect } from "react-redux";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { mcall } from "q";

class ProfileUpdate extends Component {
  render() {
    return <div />;
  }
}
const mapDispatchToProps = dispatch => ({
  ProfileUpdate: (userDate, history) =>
    dispatch(actionCreators.ProfileUpdate(userDate, history)),
  logout: (userDate, history) =>
    dispatch(actionCreators.logout(userDate, history))
});

dispatch(actionCreators.logout);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileUpdate);

// export default ProfileUpdate;
