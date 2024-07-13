import Link from 'next/link';
import Image from 'next/image';
import BrandTag from '@/components/BrandTag';
import React, { Fragment } from 'react';
import prisma from '@/utils/db';
import { getAllIslands } from '@/utils/action';

interface Island {
  id: string;
  name: string;
  count: number;
}

const Homepage: React.FC = async () => {
  const islands: Island[] = await getAllIslands();

  return (
    <Fragment>
      <div className="grid grid-cols-1 justify-items-center sm:h-screen md:h-screen bg-slate-950">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 md:fixed top-40">
          {islands.map((island) => {
            return (
              <Link href={`/${island.name}`} className="px-8 py-8 mx-8">
                <Image
                  src={`/${island.name}.svg`}
                  width={250}
                  height={250}
                  alt={`${island.name}`}
                ></Image>
              </Link>
            );
          })}
          {/* <Link href="/dragon" className="px-8 py-8 mx-8">
            <Image
              src="/Dragon.svg"
              width={250}
              height={250}
              alt="dragon"
            ></Image>
          </Link>
          <Link href="/void" className="px-8 py-8 mx-8">
            <Image src="/Void.svg" width={250} height={250} alt="void"></Image>
          </Link>
          <Link href="/lunar" className="px-8 py-8 mx-8">
            <Image
              src="/Lunar.svg"
              width={250}
              height={250}
              alt="lunar"
            ></Image>
          </Link> */}
        </div>
        <BrandTag></BrandTag>
      </div>
    </Fragment>
  );
};

export default Homepage;
