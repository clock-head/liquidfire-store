import React from 'react';
import ClothingProduct from '@/components/Clothing/ClothingProduct';
import Link from 'next/link';
import Image from 'next/image';

const Dragon = () => {
  //replace dragon.svg with clothing icon
  return (
    <div>
      <h className="text-7xl">Dragon</h>
      <Link href="/dragon/clothing">
        <Image src="/Dragon.svg" width={250} height={250}></Image>
      </Link>
    </div>
  );
};

export default Dragon;
