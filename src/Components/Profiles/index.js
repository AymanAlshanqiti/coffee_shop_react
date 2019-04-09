import React, { Component } from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

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
  let datestr = day + " " + monthNames[monthIndex] + " " + year;
  let time = formatAMPM(date);

  return datestr + " | " + time;
};

class Profile extends Component {
  async componentDidMount() {
    await this.props.getUserOrders();
    await this.props.getProfileDetail();
  }

  async componentDidUpdate(prevProps, prevState) {
    console.log("TCL: Profile -> componentDidUpdate -> prevProps", prevProps);
    console.log("TCL: Profile -> componentDidUpdate -> prevProps", this.props);

    if (prevProps.user !== this.props.user || !this.props.profile) {
      await this.props.getProfileDetail();

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

    let previousOrders = null;
    {
      if (profile) {
        previousOrders = customerOrders.map(ord => {
          return (
            <tr>
              <th scope="row">{ord.id}</th>
              <td className="text-center">
                <span>{ord.total_price}</span> SR
              </td>
              <td className="text-center">{formatTimeS(ord.created_at)}</td>
              <td className="text-center">{ord.order_products.length}</td>
              <td className="text-center">
                <Link to={`/orders/detail/${ord.id}`}>
                  <button className="btn btn-light">Detail</button>
                </Link>
              </td>
            </tr>
          );
        });
      }
    }
    return (
      <div className="row">
        <div className="col-3 ">
          <div className="card align-items-center" style={{ height: "100%" }}>
            {profile && !this.props.profile.image ? (
              <img
                src={require("../../assets/images/cafe.png")}
                className="card-img-top "
                alt="user_pic"
              />
            ) : (
              <img
                src={profile && this.props.profile.image}
                className="card-img-top "
                alt="user_pic"
              />
            )}
            <div className="card-body text-center">
              <h5 className="card-title">
                @{profile && profile.customer.username}
              </h5>
              <p className="card-text text-center" style={{ color: "#a2a2a2" }}>
                {profile &&
                  `${profile.customer.first_name} ${
                    profile.customer.last_name
                  }`}
              </p>
              <p className="card-text text-center" style={{ color: "#a2a2a2" }}>
                {profile && `${profile.customer.email}`}
              </p>
              <div className="row justify-content-md-center my-5">
                <br />
              </div>
            </div>
          </div>
        </div>

        <div
          className="col-8 mr-1 text-center"
          style={{ border: "1px solid #e1e1e1", borderRadius: 8 }}
        >
          <h2 style={{ color: "#fe687b" }} className="mt-4">
            <FontAwesomeIcon icon={faCoffee} style={{ color: "#fe687b" }} /> My
            Previous orders
          </h2>
          <br />

          <div className="row justify-content-md-center">
            <div className="col-10">
              <div className="col-12 mx-4 my-4 text-center">
                {" "}
                <table className="table table-hover text-left">
                  <thead>
                    <tr>
                      <th scope="col" style={{ color: "#fe687b" }}>
                        Order Id
                      </th>
                      <th
                        scope="col"
                        className="text-center"
                        style={{ color: "#fe687b" }}
                      >
                        Total Price
                      </th>
                      <th
                        scope="col"
                        className="text-center"
                        style={{ color: "#fe687b" }}
                      >
                        Created At
                      </th>
                      <th
                        scope="col"
                        className="text-center"
                        style={{ color: "#fe687b" }}
                      >
                        Pruducts Count
                      </th>
                      <th
                        scope="col"
                        className="text-center"
                        style={{ color: "#fe687b" }}
                      >
                        Operations
                      </th>
                    </tr>
                  </thead>
                  <tbody>{previousOrders}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserOrders: () => dispatch(actionCreators.getUserOrders()),
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
