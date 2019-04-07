import React, { Component } from "react";
import { Link } from "react-router-dom";

import * as actionCreators from "../../store/actions";
import { connect } from "react-redux";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import {
  faIdBadge,
  faIdCard,
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
          {this.props.user && <Link to="/cart">Cart</Link>}
        </div>
        <div className="col-3 align-right">
          {this.props.user ? (
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href=" "
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {" "}
                    <FontAwesomeIcon
                      icon={faUser}
                      style={{ color: "gray" }}
                    />{" "}
                    <span>Welcome </span>
                    {this.props.user.username}{" "}
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <Link to="/profile">
                      <a
                        className="dropdown-item"
                        href=" "
                        style={{ color: "gray" }}
                      >
                        <FontAwesomeIcon
                          icon={faIdCard}
                          style={{ color: "gray" }}
                        />{" "}
                        My Profile
                      </a>
                    </Link>
                    <a
                      className="dropdown-item"
                      href=" "
                      style={{ color: "gray" }}
                      onClick={() => this.props.logout()}
                    >
                      <FontAwesomeIcon
                        icon={faPowerOff}
                        style={{ color: "gray" }}
                      />{" "}
                      Logout {this.props.user.username}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <Link to="/signup" className="btn btn-outline-secondary mx-3">
                <FontAwesomeIcon icon={faUserPlus} /> Signup
              </Link>
              <Link to="/login" className="btn btn-info">
                <FontAwesomeIcon icon={faSignInAlt} /> Login
              </Link>
            </div>
          )}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  user: state.profileReducer.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actionCreators.logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
