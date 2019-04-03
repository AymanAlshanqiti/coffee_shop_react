import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import Loading from "../Loading";

class ProductList extends Component {
  render() {
    const { products, loading } = this.props;

    const prodList = products.map(prod => (
      <div className="col" key={prod.id}>
        {prod}
      </div>
    ));

    if (loading) {
      return <Loading />;
    } else {
      return (
        <div className="products">
          <h3>Products</h3>

          <div className="row">{prodList}</div>
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
