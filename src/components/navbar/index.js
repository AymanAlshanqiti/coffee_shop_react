import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as actionCreators from "../../store/actions";
import { connect } from "react-redux";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import AuthButton from "./AuthButton";
import {
  faSignOutAlt,
  faSignInAlt,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="col-9">
          <Link to="/products" className="navbar-brand">
            <img
              src={require("../../assets/images/cafe.png")}
              style={{ width: 50 }}
              alt="Hug In Mug"
            />
            <span> Hug In Mug</span>
          </Link>
          <Link to="/cart" className="">
            Cart
          </Link>
        </div>
        <div className="col-3 align-right">
          {this.props.user ? (
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {this.props.user.username}{" "}
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a
                      className="dropdown-item"
                      href="#"
                      style={{ color: "gray" }}
                    >
                      <FontAwesomeIcon
                        icon={faUser}
                        style={{ color: "gray" }}
                      />{" "}
                      My Profile
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      style={{ color: "gray" }}
                    >
                      <FontAwesomeIcon
                        icon={faPowerOff}
                        style={{ color: "gray" }}
                        onClick={() => this.props.logout()}
                      />{" "}
                      Logout {this.props.user.username}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <Link to="/login">
                <FontAwesomeIcon icon={faSignInAlt} /> Login
              </Link>
              <Link to="/signup">
                <FontAwesomeIcon icon={faUserPlus} /> Signup
              </Link>
            </div>
          )}
        </div>
      </nav>
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
)(Navbar);
{
  /* <li key="loginButton" className="nav-item">
          <Link to="/login" className="nav-link">
            <FontAwesomeIcon icon={faSignInAlt} /> Login
          </Link>
        </li>,
        <li key="signupButton" className="nav-item">
          <Link to="/signup" className="nav-link">
            <FontAwesomeIcon icon={faUserPlus} /> Signup
          </Link> */
}
