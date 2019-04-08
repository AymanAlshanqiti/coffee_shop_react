import React, { Component } from "react";

// Actions
import * as actionCreators from "../../store/actions";
import { connect } from "react-redux";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faShoppingBasket,
  faMoneyBill
} from "@fortawesome/free-solid-svg-icons";
import Loading from "../Loading";

class Cart extends Component {
  componentDidMount = async () => {
    await this.props.checkForExpiredToken();
    if (this.props.user) {
      await this.props.getUserOrders();
      this.getCartStatusOrder();
    }
    if (this.props.userOrderStatusCart) {
      await this.props.getUserCart(this.props.userOrderStatusCart.id);
    }
  };

  getCartStatusOrder = () => {
    const cartStatusOrder = this.props.userOrders.find(order => {
      return order.status === 1;
    });

    if (cartStatusOrder) {
      this.props.getUserCartOrder(cartStatusOrder);
    } else {
      this.props.createOrder(this.state);
    }
  };

  handleDeleteProduct = async orderProductID => {
    await this.props.deleteCartProduct(orderProductID);
    await this.props.getUserCart(this.props.userOrderStatusCart.id);
  };

  handleCheckout = async orderID => {
    await this.props.orderCheckout(orderID, { status: 2 });
    await this.props.getUserCart(this.props.userOrderStatusCart.id);
  };

  render() {
    if (
      this.props.userLoading ||
      this.props.userOrdersLoading ||
      this.props.userOrderStatusCartLoading ||
      this.props.userCartLoading
    ) {
      return <Loading />;
    } else {
      let cartProducts = null;
      if (this.props.userCart) {
        cartProducts = this.props.userCart.order_products.map(product => (
          <tr>
            <th scope="row">{product.product.name}</th>
            <td className="text-center">{product.quantity}</td>
            <td className="text-center">
              <span>{product.total_price}</span> SR
            </td>
            <td className="text-center">
              <button
                className="btn btn-danger"
                onClick={() => this.handleDeleteProduct(product.id)}
              >
                <FontAwesomeIcon icon={faTrash} style={{ color: "#FFF" }} />{" "}
                Remove
              </button>
            </td>
          </tr>
        ));
      }

      return (
        <div className="row justify-content-md-center">
          <div className="col-8">
            <div className="col-12 mx-4 my-4 text-center">
              <h2 style={{ color: "#fe687b" }}>
                <FontAwesomeIcon
                  icon={faShoppingBasket}
                  style={{ color: "#fe687b" }}
                />{" "}
                My Cart
              </h2>
              <br />
              <table className="table table-hover text-left">
                <thead>
                  <tr>
                    <th scope="col" style={{ color: "#fe687b" }}>
                      Product
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
                      Sub Total
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
                <tbody>
                  {cartProducts}
                  <tr>
                    <th scope="row" style={{ color: "#fe687b" }}>
                      Total Price
                    </th>
                    <td> </td>
                    <th
                      scope="row"
                      className="text-center"
                      style={{ color: "#fe687b" }}
                    >
                      <span>{this.props.userCart.total_price}</span> SR
                    </th>

                    <td className="text-center">
                      <button
                        className="btn btn-danger"
                        style={{ color: "#FFF", backgroundColor: "#fe687b" }}
                        onClick={() =>
                          this.handleCheckout(this.props.userCart.id)
                        }
                      >
                        <FontAwesomeIcon
                          icon={faMoneyBill}
                          style={{ color: "#FFF" }}
                        />{" "}
                        Checkout
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.profileReducer.user,
    userLoading: state.profileReducer.userLoading,

    userOrders: state.profileReducer.userOrders,
    userOrdersLoading: state.profileReducer.userOrdersLoading,

    userOrderStatusCart: state.profileReducer.userOrderStatusCart,
    userOrderStatusCartLoading: state.profileReducer.userOrderStatusCartLoading,

    userCart: state.ordersReducer.userCart,
    userCartLoading: state.ordersReducer.userCartLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkForExpiredToken: () => dispatch(actionCreators.checkForExpiredToken()),
    getUserOrders: () => dispatch(actionCreators.getUserOrders()),
    createOrder: order => dispatch(actionCreators.createOrder(order)),
    getUserCartOrder: order => dispatch(actionCreators.getUserCartOrder(order)),
    getUserCart: orderID => dispatch(actionCreators.getUserCart(orderID)),
    deleteCartProduct: orderProductID =>
      dispatch(actionCreators.deleteCartProduct(orderProductID)),
    orderCheckout: (orderID, orderStatus) =>
      dispatch(actionCreators.orderCheckout(orderID, orderStatus))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
