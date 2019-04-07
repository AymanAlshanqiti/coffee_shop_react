import React, { Component } from "react";
import * as actionCreators from "../../store/actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faSignInAlt,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import { from } from "rxjs";

class AuthButton extends Component {
  render() {
    // const { user } = this.props;
    const user = { username: "" };
    let buttons = (
      <li className="nav-item">
        <span className="nav-link">
          {this.props.user ? (
            <button
              className="faSignOutAlt"
              onClick={() => this.props.logout()}
            >
              Logout {this.props.user.username}
            </button>
          ) : (
            <div />
          )}
        </span>
      </li>
    );

    if (!this.props.user) {
      buttons = [
        <li key="loginButton" className="nav-item">
          <Link to="/login" className="nav-link">
            <FontAwesomeIcon icon={faSignInAlt} /> Login
          </Link>
        </li>,
        <li key="signupButton" className="nav-item">
          <Link to="/signup" className="nav-link">
            <FontAwesomeIcon icon={faUserPlus} /> Signup
          </Link>
        </li>
      ];
    }

    return (
      <ul className="navbar-nav ml-auto">
        <span className="navbar-text">{user.username}</span>
        {buttons}
      </ul>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actionCreators.logout())
});
const mapStateToProps = state => ({
  user: state.profileReducer.user
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthButton);
// const mapDispatchToProps = dispatch => ({
//   logout: () => dispatch(actionCreators.logout())
// });

// const mapStateToProps = state => ({
//   user: state.auth.user
// });
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AuthButton);
