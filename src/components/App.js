import React from 'react';

import { ProductIndexPage } from "./ProductIndex.js"
import ProductShowPage from './ProductShowPage';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import { Session } from "../requests";
import { NewProductPage } from "./NewProductPage";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {

    Session.create({
      email: "nice@meme.gov",
      password: "wew"
    }).then(user => {
      this.setState({
        currentUser: user
      });
    });
  }

render() {
  return (
    <BrowserRouter>
    <div className="ui container App">
      <NavBar />
    
      <Switch>
        <Route path="/products" exact component={ProductIndexPage} />
        <Route path="/products/:id" component={ProductShowPage} />
        <Route path="/new_product" exact component={NewProductPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
}
}

export default App;
