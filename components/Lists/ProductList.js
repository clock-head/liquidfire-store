import React from 'react';
import Product from '../Entity/Product';
import prisma from '@/utils/db';
import Link from 'next/link';
import Image from 'next/image';
import {
  getAllProductsByShopAndIsland,
  getOneIslandById,
  getOneShopById,
} from '@/utils/action';

const ProductList = async ({ islandId, shopId }) => {
  const island = await getOneIslandById(islandId);
  const shop = await getOneShopById(shopId);
  const products = await getAllProductsByShopAndIsland(shop.id, island.id);
  console.log(products);

  return (
    <div>
      {products.length === 0 && <h1>No Products to show</h1>}
      {products.map((product) => {
        <Link
          href={`/clockhead/${island.name}/${shop.type}/${product.product_code}`}
        >
          <Image></Image>
        </Link>;
      })}
    </div>
  );
};

export default ProductList;
