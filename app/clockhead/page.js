import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllIslands } from '@/utils/action';
import IslandList from '@/components/Lists/IslandList';

const clockhead = async () => {
  return (
    <div className="grid grid-cols-1 justify-items-center sm:h-screen md:h-screen bg-slate-950">
      <IslandList />
      <Link href="/clockhead/create-island">
        {/* <Image src="" alt="create-island"></Image> */}
      </Link>
    </div>
  );
};

export default clockhead;
