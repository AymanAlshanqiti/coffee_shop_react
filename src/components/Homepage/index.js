import React, { Component } from "react";

// Connectting with Redux
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";
import * as red from "../../store/reducers/profileReducer";
// Components
class Home extends Component {
  render() {
    console.log(red);
    console.log("HIZQ");

    // const orderDetail = filteredOrders.map(order => (
    //   <OrderCard key={customer.username + customer_orders} />
    // ));

    return (
      <div className="container-fluid my-4">
        <button onClick={() => this.props.getOrderDetial(1)}>click me</button>
      </div>
    );
  }
}
// const mapStateToProps = state => {
//   return {
//     orderDetail:

//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    getOrderDetial: orderID =>
      dispatch(actionCreators.fetchOrderDetail(orderID))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
