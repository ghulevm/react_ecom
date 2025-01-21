// src/Components/MenuBar.js

import { NavLink } from 'react-router-dom';
import './WelcomePage.css';
import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';


const MenuBar = () => {
const { user } = useContext(UserContext);

  return (
    <nav className="menu-bar">
      <NavLink to="/" className="menu-link" activeclassname="active-link">
        Home
      </NavLink>
      <NavLink to="/products" className="menu-link" activeClassName="active-link">
        Products
      </NavLink>
      <NavLink to="/login" className="menu-link" activeClassName="active-link">
        Login
      </NavLink>
      <NavLink to="/register" className="menu-link" activeClassName="active-link">
        Register
      </NavLink>
      {user && (
              <NavLink to="/add-product" className="menu-link add-product-button">
                Add Product
              </NavLink>
            )}



    </nav>
  );
};

export default MenuBar;