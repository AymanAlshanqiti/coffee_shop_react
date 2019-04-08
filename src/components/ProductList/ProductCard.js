import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductsCards extends Component {
  render() {
    const product = this.props.product;
    return (
      <div className="col-4 ">
        <div className="card my-4 align-items-center">
          <img
            src={product.image}
            className="card-img-top mt-4"
            alt={product.name}
            style={{ width: 200, height: 200 }}
          />
          <div className="card-body">
            <h4 className="card-title text-center" style={{ fontSize: 20 }}>
              {product.name}
            </h4>
            <p className="card-text text-center" style={{ color: "#a2a2a2" }}>
              {product.price} SR
            </p>
            <Link to={`/products/${product.id}`}>
              <button
                className="btn btn-danger btn-block"
                style={{ color: "#FFF", backgroundColor: "#fe687b" }}
              >
                Detail
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsCards;
