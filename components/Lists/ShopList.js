import React from 'react';
import { getAllShops } from '@/utils/action';
import Link from 'next/link';
import Image from 'next/image';

const ShopList = async ({ islandId, islandName }) => {
  const shops = await getAllShops({
    where: {
      island_id: islandId,
    },
  });

  return (
    <div className="grid grid-cols-1 justify-items-center h-screen">
      {shops.map((shop) => {
        return (
          <Link href={`/clockhead/${islandName}/${shop.type}`}>
            <Image alt={`${shop.type}`}></Image>
          </Link>
        );
      })}
    </div>
  );
};

export default ShopList;
