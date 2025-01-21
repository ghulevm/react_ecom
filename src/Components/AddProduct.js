import React, { useState, useContext } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { UserContext } from '../Contexts/UserContext';
import 'react-toastify/dist/ReactToastify.css';
import './ToastifyCustom.css';
import './AddProduct.css';
import MenuBar from './MenuBar';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: null,
  });

  const { user } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({
        ...formData,
        image: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('price', formData.price);
    data.append('description', formData.description);
    data.append('image', formData.image);
    console.log('Form data:', {
    name: formData.name,
    price: formData.price,
    description: formData.description,
    image: formData.image,
  });

    try {
      const response = await axios.post('http://localhost:8080/products', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Product added successfully!', {
        className: 'custom-toast custom-toast-success',
      });
      console.log('Product added:', response.data);
    } catch (error) {
      toast.error('Error adding product. Please try again.', {
        className: 'custom-toast custom-toast-error',
      });
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="add-product-container">
      <ToastContainer />
      {user && <MenuBar />}
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;