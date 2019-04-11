import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as actionCreators from "../../store/actions";

import { connect } from "react-redux";

class ProductsCards extends Component {
  addProduct = async prodID => {
    let order = this.props.userOrderStatusCart;
    if (order) {
      await this.props.addProductToCart({
        order: order.id,
        product: prodID,
        quantity: 1
      });
    }
  };
  render() {
    const product = this.props.product;
    return (
      <div className="col-3 ">
        <div className="card my-4" style={{ maxWidth: 400, maxHeight: 600 }}>
          <Link
            to={`/products/${product.id}`}
            style={{ textDecoration: "none" }}
          >
            <img
              src={product.image}
              className="card-img-top"
              alt={product.name}
            />
          </Link>
          <div className="card-body">
            <h6 className="card-title text-wrap text-center">
              {" "}
              {product.name}
            </h6>
            <p className="card-text text-center" style={{ color: "#a2a2a2" }}>
              {product.price} SR
            </p>
            <div className="row justify-content-md-center">
              <div className="col-12">
                <button
                  className="btn btn-block btn-info"
                  onClick={() => this.addProduct(product.id)}
                  style={{
                    color: "#FFF",
                    backgroundColor: "#fe687b",
                    border: "none"
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userOrderStatusCart: state.profileReducer.userOrderStatusCart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProduct: prodID => dispatch(actionCreators.getProductDetail(prodID)),
    addProductToCart: product =>
      dispatch(actionCreators.addProductToCart(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsCards);
