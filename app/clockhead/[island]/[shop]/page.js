import React from 'react';
//import { useRouter } from 'next/navigation';
// import ProductForm from '@/components/Forms/ProductForm';
import Shop from '@/components/Entity/Shop';
import {
  getOneShopByIslandIdAndType,
  getOneIslandByName,
} from '@/utils/action';

const SingleShopPage = async ({ params }) => {
  const island = await getOneIslandByName(params.island);
  const shop = await getOneShopByIslandIdAndType(island.id, params.shop);
  return (
    <div>
      <div>T-Shirts</div>
      <Shop islandId={island.id} shopId={shop.id}></Shop>
    </div>
  );
};

export default SingleShopPage;
