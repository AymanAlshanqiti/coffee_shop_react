import React, { Component } from "react";

// Components
import Loading from "../Loading";

import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

class ProductDetail extends Component {
  componentDidMount() {
    this.props.getProduct(this.props.match.params.productID);
  }

  render() {
    const { loading, productInfo } = this.props;

    if (loading) {
      return <Loading />;
    } else {
      return (
        <div className="col-4">
          <div class="card my-4 align-items-center">
            <img
              src={productInfo.image}
              class="card-img-top my-2"
              alt={productInfo.name}
              style={{ width: 200, height: 200 }}
            />
            <div className="card-body">
              <h5 className="card-title">{productInfo.name}</h5>
              <p className="card-text text-center" style={{ color: "#a2a2a2" }}>
                {productInfo.price} SR
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    // user: state.profileReducer.user,
    loading: state.productsReducer.productInfoLoading,
    productInfo: state.productsReducer.productInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProduct: prodID => dispatch(actionCreators.getProductDetail(prodID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
