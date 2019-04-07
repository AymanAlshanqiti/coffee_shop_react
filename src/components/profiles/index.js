import React, { Component } from "react";

import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import RegistrationForm from "./RegistrationForm";
class Profile extends Component {
  render() {
    return (
      <div className="row my-4">
        <div className="col-3 mx-4">
          <div className="card my-4 align-items-center" style={{ height: 500 }}>
            <img
              src={require("../../assets/images/cafe.png")}
              className="card-img-top my-2"
              alt="user_pic"
              style={{ width: 200, height: 200 }}
            />
            <div className="card-body text-center">
              <h5 className="card-title">@MG</h5>
              <p className="card-text text-center" style={{ color: "#a2a2a2" }}>
                Mohammed.MG
              </p>
              <div className="row justify-content-md-center my-5">
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="col-8 mx-4 my-4 text-center">
          <h2 style={{ color: "#fe687b" }}>
            <FontAwesomeIcon icon={faCoffee} style={{ color: "#fe687b" }} /> My
            Previous orders
          </h2>
          <br />
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Cras justo odio
              <span
                className="badge badge-primary badge-pill"
                style={{ backgroundColor: "#fe687b" }}
              >
                14
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Dapibus ac facilisis in
              <span
                className="badge badge-primary badge-pill"
                style={{ backgroundColor: "#fe687b" }}
              >
                2
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Morbi leo risus
              <span
                className="badge badge-primary badge-pill"
                style={{ backgroundColor: "#fe687b" }}
              >
                1
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOrderDetial: orderID =>
      dispatch(actionCreators.fetchOrderDetail(orderID))
  };
};
const mapStateToProps = state => ({
  user: state.profileReducer.user
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
