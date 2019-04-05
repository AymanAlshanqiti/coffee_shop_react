import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductsCards extends Component {
  render() {
    const product = this.props.product;
    return (
      <div className="col-4">
        <div class="card my-4 align-items-center">
          <img
            src={product.image}
            class="card-img-top my-2"
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
            <Link
              to={`/products/${product.id}`}
              class="btn btn-light btn-block"
              style={{ backgroundColor: "#fe687b", color: "#fff" }}
            >
              Detail
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsCards;
