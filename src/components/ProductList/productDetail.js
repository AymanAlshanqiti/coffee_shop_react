import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

class productDetail extends Component {
  render() {
    let productID = this.props.match.params.productID;
    alert("Hiiiiii");
    return (
      <div className="col-3">
        <div class="card my-3">
          <img
            src={require("../../assets/images/default.jpg")}
            class="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">lll</h5>
            <p className="card-text"> S.R.</p>
            <a href="#" class="btn btn-light btn-block">
              More Info
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    productInfo: state.productsReducer.productInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProductDetail: productID =>
      dispatch(actionCreators.getProductDetail(productID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(productDetail);
