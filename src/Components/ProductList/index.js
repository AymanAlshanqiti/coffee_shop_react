import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import Loading from "../Loading";
import ProductsCards from "./ProductCard";

class ProductList extends Component {
  render() {
    const { products, productsLoading } = this.props;

    const productsList = products.map(product => (
      <ProductsCards product={product} key={product.id} />
    ));

    if (productsLoading) {
      return <Loading />;
    } else {
      return (
        <div className="row justify-content-md-center">
          <div className="col-11">
            <div className="row">{productsList}</div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    products: state.productsReducer.products,
    productsLoading: state.productsReducer.productsLoading
  };
};

export default connect(mapStateToProps)(ProductList);
