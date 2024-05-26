import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllIslands } from '@/utils/action';

const IslandList = async () => {
  const islands = await getAllIslands();

  return (
    <div>
      {islands.map((island) => {
        return (
          <Link href={`/clockhead/${island.name}`}>
            <Image src={`${island.name}.svg`} width={250} height={250}></Image>
          </Link>
        );
      })}
    </div>
  );
};

export default IslandList;
