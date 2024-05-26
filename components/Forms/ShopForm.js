'use client';
import React, { useState } from 'react';

const ShopForm = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    type: 1,
  });

  const prismaHandler = async (e) => {
    e.preventDefault();

    await createShop(formData, params.island);
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
    <div className="flex items-center justify-center min-h-screen bg-slate-850">
      {formVisible && (
        <form onSubmit={prismaHandler}>
          {/* <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          name="name"
          value={data.name}
          onChange={handleInputChange}
        ></input> */}
          {/* <label htmlFor="island_id">Island ID</label>
        <input
          type="text"
          id="shop_id"
          name="shop_id"
          value={data.island_id}
          onChange={handleInputChange}
        /> */}
          <label htmlFor="type">Type</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>

          <button type="submit">create</button>
        </form>
      )}
      <button onClick={setFormVisible}>Create Temple</button>
    </div>
  );
};

export default ShopForm;
