import React from "react";
import { NavLink /* Link */ } from "react-router-dom";

function NavBar(props) {
  return (
    <div className="ui pointing menu">
      <NavLink to="/" className="item">
        Home
      </NavLink>
      <NavLink to="/products" className="item">
        Products
      </NavLink>
      <NavLink to="/new_product" className="item">
        New Product
      </NavLink>

    </div>
  ); 
}

export default NavBar;
