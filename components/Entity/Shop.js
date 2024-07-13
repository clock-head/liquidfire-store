import React from 'react';
import ProductList from '../Lists/ProductList';
import ProductForm from '../Forms/ProductForm';
import prisma from '@/utils/db';
import { getOneShopById } from '@/utils/action';

const Shop = async ({ islandId, shopId }) => {
  const shop = await getOneShopById(shopId);

  const toggleFormVisible = () => {
    const toggle = formVisible ? false : true;
    setFormVisible(formVisible);
  };

  return (
    <div>
      <ProductList islandId={islandId} shopId={shopId}></ProductList>
      <ProductForm
        productType={shop.type}
        islandId={islandId}
        shopId={shopId}
      ></ProductForm>
    </div>
  );
};

export default Shop;
