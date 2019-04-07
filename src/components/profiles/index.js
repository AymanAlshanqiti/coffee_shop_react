import React, { Component } from "react";

import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import RegistrationForm from "./RegistrationForm";

const formatAMPM = date => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";

  hours = hours % 12 || 12; // the hour '0' should be '12'

  minutes = minutes < 10 ? "0" + minutes : minutes;

  return hours + ":" + minutes + " " + ampm;
};

const formatTimeS = ts => {
  let date = new Date(ts);
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let day = date.getDate();
  let monthIndex = date.getMonth();
  let year = date.getFullYear();
  // Where do we use it ? hey ayman!! we use it here!
  let datestr = day + " " + monthNames[monthIndex] + " " + year;
  let time = formatAMPM(date);

  return datestr + " | " + time;
};

class Profile extends Component {
  async componentDidMount() {
    let user = this.props.user;
    console.log("TCL: Profile -> componentDidMount -> user", user);
    // TODO: check if needed even if the user
    // got to this page by <Link to='/profile'>
    this.props.getProfileDetail();
  }

  async componentDidUpdate(prevProps, prevState) {
    console.log("TCL: Profile -> componentDidUpdate -> prevProps", prevProps);
    console.log("TCL: Profile -> componentDidUpdate -> prevProps", this.props);

    if (prevProps.user !== this.props.user || !this.props.profile) {
      this.props.getProfileDetail();

      console.log("this.props.profile: ", this.props.profile);
    }
  }

  render() {
    let { profile } = this.props;

    let customerOrders = null;

    if (profile) {
      customerOrders = profile.customer_orders.filter(
        ord => ord.status.title !== "Cart"
      );
      console.log("TCL: Profile -> render -> customerOrders", customerOrders);
    }
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
              <h5 className="card-title">
                @{profile && profile.customer.username}
              </h5>
              <p className="card-text text-center" style={{ color: "#a2a2a2" }}>
                {profile && profile.customer.first_name}
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
            {profile &&
              customerOrders.map(ord => {
                return (
                  <li
                    key={ord.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {ord.id} || Total Price: {ord.total_price} || Created:{" "}
                    {formatTimeS(ord.created_at)}
                    <span
                      className="badge badge-primary badge-pill"
                      style={{ backgroundColor: "#fe687b" }}
                    >
                      {ord.order_products.length}
                    </span>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProfileDetail: () => dispatch(actionCreators.fetchProfileDetail())
  };
};
const mapStateToProps = state => ({
  user: state.profileReducer.user,
  profile: state.profileReducer.profile
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
