'use client';
import React, { useState } from 'react';

const IslandForm = ({ prismaHandler, handleInputChange, data }) => {
  const [formVisible, setFormVisible] = useState(false);

  const toggleFormVisible = () => {
    const toggle = formVisible ? false : true;
    setFormVisible(toggle);
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
            value={data.name}
            onChange={handleInputChange}
          ></input>
          <button type="submit" onClick={toggleFormVisible}>
            create
          </button>
        </form>
      )}
    </div>
  );
};

export default IslandForm;
