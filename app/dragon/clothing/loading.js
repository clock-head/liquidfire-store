import React from 'react';

const loading = () => {
  return (
    <div className="grid grid-cols-1 justify-items-center">
      <span className="fixed top-56 loading loading-infinity loading-xl">
        loading
      </span>
    </div>
  );
};

export default loading;
