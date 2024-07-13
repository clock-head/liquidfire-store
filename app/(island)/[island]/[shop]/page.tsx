import React from 'react';

interface Shop {
  params: {
    shop: string;
  };
}

const ShopDisplayPage = ({ params }: Shop) => {
  return (
    <div>
      <h1 className="text-5xl"> {params.shop} </h1>
    </div>
  );
};

export default ShopDisplayPage;
