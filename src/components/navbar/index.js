import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import AuthButton from "./AuthButton";
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
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                {/* <a
                  className="nav-link dropdown-toggle"
                  href=" "
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                /> */}
                <AuthButton />
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link
                    to="/profile"
                    className="dropdown-item"
                    style={{ color: "gray" }}
                  >
                    <FontAwesomeIcon icon={faUser} style={{ color: "gray" }} />{" "}
                    My Profile
                  </Link>
                  <a
                    className="dropdown-item"
                    href=" "
                    style={{ color: "gray" }}
                  >
                    <FontAwesomeIcon
                      icon={faPowerOff}
                      style={{ color: "gray" }}
                    />{" "}
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.profileReducer.user
  };
};

export default connect(mapStateToProps)(Navbar);
