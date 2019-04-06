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

class Cart extends Component {
  state = {
    cartProducts: null
  };

  componentDidMount = async () => {
    if (this.props.userOrderStatusCart) {
      await this.props.getUserCart(this.props.userOrderStatusCart.id);
      await this.setState({ cartProducts: this.props.userCart });
    }
  };

  render() {
    console.log("[CartOrderObj] => ", this.state);
    let cartProducts = null;
    if (this.state.cartProducts) {
      cartProducts = this.state.cartProducts.map(product => (
        <tr>
          <th scope="row">{product.product.name}</th>
          <td>product.quantity</td>
          <td>
            <span>product.total_price</span> SR
          </td>
          <td className="text-center">
            <button className="btn btn-danger">
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
                  <th scope="col">Product</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total Price</th>
                  <th scope="col">Operations</th>
                </tr>
              </thead>
              <tbody>
                {cartProducts}
                <tr>
                  <th scope="row">Total Price</th>
                  <td />
                  <th scope="row">
                    <span>0.00</span> SR
                  </th>

                  <td className="text-center">
                    <button
                      className="btn btn-danger"
                      style={{ color: "#FFF", backgroundColor: "#fe687b" }}
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

const mapStateToProps = state => {
  return {
    userCart: state.ordersReducer.userCart,
    userOrderStatusCart: state.profileReducer.userOrderStatusCart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserCart: orderID => dispatch(actionCreators.getUserCart(orderID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
