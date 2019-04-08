import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductsCards extends Component {
  render() {
    const product = this.props.product;
    return (
      <div className="col-3 ">
        <div className="card my-4 ">
          <img
            src={product.image}
            className="card-img-top"
            alt={product.name}
          />
          <div className="card-body">
            <h6 className="card-title text-center"> {product.name}</h6>
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
