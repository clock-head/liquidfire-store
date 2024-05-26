'use client';
import React, { useState } from 'react';
import { createProduct } from '@/utils/action';

const ProductForm = ({ productType }) => {
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
  });

  const prismaHandler = async () => {
    await createProduct();
  };

  const handleInputChange = async (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: parseInt(value),
    });
  };

  const toggleFormVisible = () => {
    if (!formVisible) {
      setFormVisible(true);
    } else {
      setFormVisible(false);
    }
  };

  return (
    <div>
      {formVisible && (
        <form onSubmit={prismaHandler}>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          ></input>
          <button type="submit">create</button>
        </form>
      )}
      <button className="btn btn-neutral" onClick={toggleFormVisible}>
        Add Product
      </button>
    </div>
  );
};

export default ProductForm;
