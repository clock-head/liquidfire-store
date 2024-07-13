'use client';
import React, { useState } from 'react';
import { createProduct } from '@/utils/action';
import UploadButtonComponent from '@/components/Upload/UploadButton';

interface productFormProps {
  name: string;
  price: number;
}

interface productParams {
  productType: string;
  islandId: string;
  shopId: string;
}

const ProductForm = ({ productType, islandId, shopId }: productParams) => {
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState<productFormProps>({
    name: '',
    price: 0.0,
  });

  const createNewProduct = async (formData: FormData) => {
    const name = formData.get('name');
    const price = formData.get('price');
    await createProduct(islandId, shopId, name, price, productType);
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'name') {
      setFormData({
        ...formData,
        [name]: value,
      });
      console.log(value);
    }

    if (name === 'price') {
      if (typeof parseInt(value) === 'number') {
        setFormData({
          ...formData,
          [name]: parseInt(value),
        });
        console.log(value);
      }
    }
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
        <form action={createNewProduct}>
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          ></input>
          <label htmlFor="price">price</label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          ></input>
          <UploadButtonComponent></UploadButtonComponent>
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
