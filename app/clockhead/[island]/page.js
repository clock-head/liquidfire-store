import React from 'react';
import prisma from '@/utils/db';
import Link from 'next/link';
import Image from 'next/image';
import ShopForm from '@/components/Forms/ShopForm';
import { createShop, getAllShops, getOneIslandByName } from '@/utils/action';
import ShopList from '@/components/Lists/ShopList';
import Island from '@/components/Entity/Island';

const SingleIslandPage = async ({ params }) => {
  const island = await getOneIslandByName(params.island);

  return (
    <div className="h-screen">
      <h1>{params.island}</h1>
      <Island islandId={island.id} islandName={params.island} />
    </div>
  );
};

export default SingleIslandPage;
