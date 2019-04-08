import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import Loading from "../Loading";
import ProductsCards from "./ProductCard";

class ProductList extends Component {
  render() {
    const { products, loading } = this.props;

    const prodList = products.map(product => (
      <ProductsCards product={product} key={product.id} />
    ));

    if (loading) {
      return <Loading />;
    } else {
      return (
        <div className="row justify-content-md-center">
          <div className="col-10">
            <div className="row">{prodList}</div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    // user: state.profileReducer.user,
    loading: state.productsReducer.productsLoading,
    products: state.productsReducer.products
  };
};

export default connect(mapStateToProps)(ProductList);
