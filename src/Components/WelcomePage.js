// src/Components/WelcomePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MenuBar from './MenuBar';
import './WelcomePage.css';
import AddToCart from './AddToCart';
//const products = [
//{ id: 1, name: 'Product 1', image: '/images/image1.webp' },
//  { id: 2, name: 'Product 2', image: '/images/image2.webp' },
//  { id: 3, name: 'Product 3', image: '/images/image3.webp' },
//];

const WelcomePage = () => {

const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="welcome-container">
          <MenuBar />
          <h2>Welcome to Our Store</h2>
          <div className="product-list">
            {products.map((product) => (
              <div key={product.id} className="product-item">
                <img src={`/images/${product.imageUrl}`} alt={product.name} className="product-image" />
                <div className="product-details">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                  <AddToCart productId={product} />

                </div>
              </div>
            ))}
          </div>
        </div>
  );
};

export default WelcomePage;