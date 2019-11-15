import React from "react";
import { Link } from "react-router-dom";

import { Product } from "../requests";
import Spinner from "./Spinner";

export class ProductIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoading: true
    };

  }

  componentDidMount() {

    Product.all().then(products => {

      this.setState({
        products: products,
        isLoading: false
      });
    });
  }

  deleteProduct(id) {
    
    this.setState({
      products: this.state.products.filter(q => q.id !== id)
    });
  }
  render() {
    if (this.state.isLoading) {
      return <Spinner />;
    }
    const { showAll = false } = this.props;
    const filteredProduct = this.state.products.filter((q, index) => {
      if (showAll || index < 5) {
        return true;
      }
      return false;
    });
    return (
      <main className="ProductIndexPage">

        <h2>Products</h2>
        <div
          className="ui list"
          style={{
            listStyle: "none",
            paddingLeft: 0
          }}
        >
          {filteredProduct.map(product => (
            <li className="ui segment" key={product.id}>
              <Link to={`/products/${product.id}`} className="item" href="">
                {product.title}
              </Link>
              <button
                className="ui right floated red small button"
                onClick={() => this.deleteProduct(product.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </div>
      </main>
    );
  }
}
