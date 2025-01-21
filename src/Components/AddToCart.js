// src/Components/AddToCart.js
import React, { useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../Contexts/CartContext';
import './AddToCart.css';
import  { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddToCart = ({ productId }) => {
  const { addToCart } = useContext(CartContext);
const navigate = useNavigate();


//  const handleChange = (e) => {
//      setFormData({
//        ...formData,
//        [e.target.name]: e.target.value,
//      });
//    };
  const handleAddToCart = async (e) => {
   e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/carts', productId);
      toast.success('Login successful!', {
        className: 'custom-toast custom-toast-success',
      });

      addToCart(productId);
navigate('/carts');

      console.log(`Product ${productId} added to cart`);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  return (
    <button className="add-to-cart-button" onClick={handleAddToCart}>
      Add to Cart
    </button>
  );
};

export default AddToCart;