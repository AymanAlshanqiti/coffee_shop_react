import React, { Component } from "react";

// Connectting with Redux
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

// Components
import Navbar from "../navbar";
import ProductsList from "../products";
import productsData from "../products/productsData";
import productDetail from "../ProductList/productDetail";

class Home extends Component {
  render() {
    console.log("productsData", productsData);
    const productsList = productsData.map(product => {
      return <ProductsList product={product} key={product.id} />;
    });
    return (
      <div className="">
        <Navbar />
        <div className="container-fluid my-4">
          <div className="row justify-content-md-center ">
            <div className="col-8">
              <div className="row">{productsList}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
