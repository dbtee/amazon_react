import React from "react";
import NewProductForm from "./NewProductForm";
import { Product } from "../requests";
import Spinner from "./Spinner";

export class NewProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        //currentUser: true
        };

    this.createProduct = this.createProduct.bind(this);
    }

        createProduct(params) {
            
            Product.create(params).then(product => {
           
              this.props.history.push(`/products/${product.id}`);
            });
          }
    render() {
        if (this.state.isLoading) {
            return <Spinner />;
          }
          return (
            <main className="NewProductPage">
                <h1>New Product</h1>
              <NewProductForm onSubmit={this.createProduct} />

            </main>
    )}
}