import React, { Component } from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faArrowCircleLeft
} from "@fortawesome/free-solid-svg-icons";
import Loading from "../Loading";

class PreviousOrders extends Component {
  async componentDidMount() {
    this.props.getProfileDetail();
    await this.props.getOrderDetail(this.props.match.params.orderID);
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.user !== this.props.user || !this.props.profile) {
      this.props.getProfileDetail();
      await this.props.getOrderDetail(this.props.match.params.orderID);
    }
  }

  render() {
    let { profile } = this.props;

    let customerOrders = null;

    if (this.props.orderDetailLoading) {
      return <Loading />;
    } else {
      console.log(
        "[PreviousOrders.js] => orderDetail => ",
        this.props.orderDetail.order_products
      );

      if (profile) {
        customerOrders = profile.customer_orders.filter(
          ord => ord.status.title !== "Cart"
        );
        console.log("TCL: Profile -> render -> customerOrders", customerOrders);
      }

      let orderProducts = null;
      {
        if (profile) {
          orderProducts = this.props.orderDetail.order_products.map(
            productObj => {
              return (
                <tr>
                  <th scope="row">{productObj.product.name}</th>
                  <td className="text-center">
                    <span>{productObj.quantity}</span>
                  </td>
                  <td className="text-center">
                    <span>{productObj.total_price}</span> SR
                  </td>
                </tr>
              );
            }
          );
        }
      }
      return (
        <div className="row">
          <div className="col-3">
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
                <p
                  className="card-text text-center"
                  style={{ color: "#a2a2a2" }}
                >
                  {profile &&
                    `${profile.customer.first_name} ${
                      profile.customer.last_name
                    }`}
                </p>
                <p
                  className="card-text text-center"
                  style={{ color: "#a2a2a2" }}
                >
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
            <div className="row mt-4">
              <div className="col-3 text-center">
                <Link to="/profile">
                  <h4 style={{ color: "#c7c7c7" }}>
                    <FontAwesomeIcon
                      icon={faArrowCircleLeft}
                      style={{ color: "#c7c7c7" }}
                    />{" "}
                    Go Back
                  </h4>
                </Link>
              </div>
              <div className="col-6">
                <h2 style={{ color: "#fe687b" }}>
                  <FontAwesomeIcon
                    icon={faChevronCircleDown}
                    style={{ color: "#fe687b" }}
                  />{" "}
                  Order Detail
                </h2>
              </div>
            </div>

            <br />

            <div className="row justify-content-md-center">
              <div className="col-10">
                <div className="col-12 mx-4 my-4 text-center">
                  {" "}
                  <table className="table table-hover text-left">
                    <thead>
                      <tr>
                        <th scope="col" style={{ color: "#fe687b" }}>
                          Product Name
                        </th>
                        <th
                          scope="col"
                          className="text-center"
                          style={{ color: "#fe687b" }}
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="text-center"
                          style={{ color: "#fe687b" }}
                        >
                          Sub Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>{orderProducts}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProfileDetail: () => dispatch(actionCreators.fetchProfileDetail()),
    getOrderDetail: orderID => dispatch(actionCreators.getOrderDetail(orderID))
  };
};
const mapStateToProps = state => ({
  user: state.profileReducer.user,
  profile: state.profileReducer.profile,
  orderDetail: state.ordersReducer.orderDetail,
  orderDetailLoading: state.ordersReducer.orderDetailLoading
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreviousOrders);
