'use server';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  getAllShops,
  getOneIslandById,
  getOneIslandByName,
  Island,
  Shop,
} from '@/utils/action';

interface Params {
  params: { island: string };
}

const SingleIslandPage = async ({ params }: Params) => {
  const island: Island | null = await getOneIslandByName(params.island);
  let shops: Shop[] | null = null;
  if (island) {
    shops = await getAllShops(island.id);
  }

  return (
    <div>
      <h1> {params.island} </h1>
      <div className="grid grid-cols-3">
        {shops &&
          island &&
          shops.map((shop) => {
            return (
              <Link href={`/${island.name}/${shop.type}`}>
                <Image src="" alt={shop.type.toString()}></Image>
              </Link>
            );
          })}
        {!shops && <p>This island has no shops open.</p>}
      </div>
    </div>
  );
};

export default SingleIslandPage;
