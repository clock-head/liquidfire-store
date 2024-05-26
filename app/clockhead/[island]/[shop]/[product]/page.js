import React from 'react';
import Product from '@/components/Entity/Product';

const SingleProductPage = ({ params }) => {
  return <div>{params.product}</div>;
};

export default SingleProductPage;
