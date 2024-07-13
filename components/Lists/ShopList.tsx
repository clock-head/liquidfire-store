import React from 'react';
import { getAllShops } from '@/utils/action';
import Link from 'next/link';
import Image from 'next/image';

interface ShopListProps {
  islandId: string;
  islandName: string;
}

const ShopList = async ({ islandId, islandName }: ShopListProps) => {
  const shops = await getAllShops(islandId);

  return (
    <div className="grid grid-cols-1 justify-items-center h-screen">
      {shops.map((shop) => {
        return (
          <Link href={`/clockhead/${islandName}/${shop.type}`}>
            <Image src="" alt={`${shop.type}`}></Image>
          </Link>
        );
      })}
    </div>
  );
};

export default ShopList;
