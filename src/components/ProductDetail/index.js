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
        <div className="product">
          <div>
            <h3>{productInfo.name}</h3>
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
