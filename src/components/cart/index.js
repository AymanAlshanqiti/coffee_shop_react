import React, { Component } from "react";

// Actions
import * as actionCreators from "../../store/actions";
import { connect } from "react-redux";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

// Components
// import { productsRows } from "./productsRows";

class Cart extends Component {
  state = {
    cartOrderID: null
  };

  componentDidMount = async () => {
    this.setState({
      cartOrderID: this.props.userOrderStatusCart.id
    });
    if (this.props.userOrderStatusCart) {
      await this.props.getUserCart(this.props.userOrderStatusCart.id);
    }
  };

  render() {
    console.log("[CartOrderObj] => ", this.state.cartOrderID);

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
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total Price</th>
                  <th scope="col">Operations</th>
                </tr>
              </thead>
              <tbody>
                {/* {productsRows} */}
                <tr>
                  <th scope="row">2</th>
                  <td>6</td>
                  <td>
                    <span>39.98</span> SR
                  </td>
                  <td>
                    <button className="btn btn-danger">
                      <FontAwesomeIcon
                        icon={faTrash}
                        style={{ color: "#FFF" }}
                      />{" "}
                      Remove
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
