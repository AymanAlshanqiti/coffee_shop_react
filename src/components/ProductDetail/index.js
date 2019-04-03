import React, { Component } from "react";

// Components
import Loading from "../Loading";

import { connect } from "react-redux";

// import * as actionCreators from "../store/actions/index";

class ProductDetail extends Component {
  componentDidMount() {
    this.props.getProduct(this.props.match.params.authorID);
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    } else {
      const author = this.props.author;
      return (
        <div className="author">
          <div>
            <h3>{author.first_name + " " + author.last_name}</h3>
            <img
              src={author.imageUrl}
              className="img-thumbnail img-fluid"
              alt={author.first_name + " " + author.last_name}
            />
          </div>
          <BookTable books={author.books} />
          {this.props.user ? <AddBookModal authorID={author.id} /> : <div />}
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
