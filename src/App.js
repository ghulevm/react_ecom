// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterPage from './Components/Register';
import WelcomePage from './Components/WelcomePage';
import LoginPage from './Components/LoginPage';
import AddProduct from './Components/AddProduct';
import { UserProvider } from './Contexts/UserContext';
import { CartProvider } from './Contexts/CartContext';
import Header from './Components/Header';
import Cart from './Components/Cart';

function App() {
  return (
    <UserProvider>
      <CartProvider>
      <Router>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/carts" element={<Cart />} />

          </Routes>
        </div>
      </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;