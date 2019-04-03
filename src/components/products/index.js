import React, { Component } from "react";

class ProductsList extends Component {
  render() {
    return (
      <div className="col-3">
        <div class="card my-3">
          <img
            src={require("../../assets/images/default.jpg")}
            class="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.product.name}</h5>
            <p className="card-text">{this.props.product.price} S.R.</p>
            <a href="#" class="btn btn-light btn-block">
              More Info
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsList;
