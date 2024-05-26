'use client';
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    const countInput = count - 1 >= 0 ? count - 1 : 0;
    setCount(countInput);
  };
  return (
    <div className="grid grid-cols-3 my-8">
      <h5 className="script" style={{ fontSize: '1rem' }}>
        {count}
      </h5>
      <button
        className="btn btn-active btn-neutral btn-sm"
        onClick={decreaseCount}
      >
        -
      </button>
      <button
        className="btn btn-active btn-neutral btn-sm"
        onClick={increaseCount}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
