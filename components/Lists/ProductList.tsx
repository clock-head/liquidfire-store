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
import { ObjectType } from 'typescript';

interface ProductListProps {
  islandId: string;
  shopId: string;
}

const ProductList: React.FC<ProductListProps> = async ({
  islandId,
  shopId,
}) => {
  interface ProductObject {
    id: string;
    shop_id: string;
    island_id: string;
    type: number;
    price: number;
    product_code: number;
    image_binary_hash: string;
  }

  const island = await getOneIslandById(islandId);
  const shop = await getOneShopById(shopId);
  let products: ProductObject[];
  if (shop && island) {
    products = await getAllProductsByShopAndIsland(shop.id, island.id);
    // console.log(products);
  } else {
    products = [];
  }

  return (
    <div>
      {products.length === 0 && <h1>No Products to show</h1>}
      {island &&
        shop &&
        products.map((product) => {
          return (
            <Link
              href={`/clockhead/${island.name}/${shop.type}/${product.product_code}`}
            >
              <Image src="" alt="product"></Image>
            </Link>
          );
        })}
    </div>
  );
};

export default ProductList;
