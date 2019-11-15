import React, { Component } from "react";

import ProductDetails from "./ProductDetails";
import { ReviewList } from "./ReviewList";
import { Product } from "../requests";
import Spinner from "./Spinner";

class ProductShowPage extends Component {
  constructor(props) {

    super(props);

    this.state = {
      product: null,
      isLoading: true
    };
  }

  componentDidMount() {

    Product.one(this.props.match.params.id).then(product => {
      this.setState({
        product: product,
        isLoading: false
      });
    });
  }

  deleteProduct() {
    this.setState({
      product: null
    });
  }

  deleteReview(id) {
    this.setState({
      product: {
        ...this.state.product,
        reviews: this.state.product.reviews.filter(a => a.id !== id)
      }
    });
  }
  render() {
    if (this.state.isLoading) {
      return <Spinner />;
    }
      return (
        <main>
        <ProductDetails {...this.state.product} />
        <button
          className="ui right floated red small button"
          onClick={() => this.deleteProduct()}
        >
          Delete
        </button>
        <h2>Reviews</h2>
        <ReviewList
          reviews={this.state.product.reviews}
          onReviewDeleteClick={id => this.deleteReview(id)}
        />
      </main>
      );
    }
}

export default ProductShowPage;