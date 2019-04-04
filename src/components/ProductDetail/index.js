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
        <div className="row">
          <div className="col-3 mx-4">
            <div class="card my-4 align-items-center" style={{ height: 500 }}>
              <img
                src={productInfo.image}
                class="card-img-top my-2"
                alt={productInfo.name}
                style={{ width: 200, height: 200 }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{productInfo.name}</h5>
                <p
                  className="card-text text-center"
                  style={{ color: "#a2a2a2" }}
                >
                  {productInfo.price} SR
                </p>
                <div className="row justify-content-md-center my-5">
                  <br />
                  <form>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">Quantity*</span>
                      </div>
                      <input
                        type="number"
                        max="1000"
                        min="1"
                        placeholder="1"
                        className="form-control"
                        name="alias"
                        // onChange={this.textChange.bind(this)}
                      />
                    </div>
                    <input
                      type="submit"
                      value="Add To Cart"
                      class="btn btn-light btn-block"
                      style={{ backgroundColor: "#fe687b", color: "#fff" }}
                    />{" "}
                    <br />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8 mx-4">
            <div class="card my-4 align-items-left" style={{ height: 500 }}>
              <div className="card-body text-center">
                <h5 className="card-title my-5">{productInfo.description}</h5>
                <div className="row ">
                  <div className="col-4 text-center">
                    <span>Process: </span>
                    <span className="card-text" style={{ color: "#a2a2a2" }}>
                      {productInfo.process}
                    </span>
                  </div>
                  <div className="col-4 text-center">
                    <span>Flavor: </span>
                    <span className="card-text" style={{ color: "#a2a2a2" }}>
                      {productInfo.flavor}
                    </span>
                  </div>
                  <div className="col-4 text-center">
                    <span>Origin: </span>
                    <span className="card-text" style={{ color: "#a2a2a2" }}>
                      {productInfo.origin}
                    </span>
                  </div>
                </div>
              </div>
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
