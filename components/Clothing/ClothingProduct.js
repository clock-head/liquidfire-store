import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Counter from '../Counter';

const sizes = ['Small', 'Medium', 'Large', 'X-Large'];

const ClothingProduct = () => {
  return (
    <div className="card card-body">
      <Image
        src="/Sea_Dragon.jpg"
        width={250}
        height={250}
        alt="sea_dragon"
        className="px-8 py-8"
      ></Image>
      <div className="grid sm:grid-cols-3 md:grid-cols-4">
        {sizes.map((size) => {
          return (
            <div className="card card-body">
              <h5 className="script" style={{ fontSize: '1rem' }}>
                {size}
              </h5>
              <Counter />
            </div>
          );
        })}
      </div>
      <div className="absolute right-10 bottom-0">
        <button className="btn btn-active btn-neutral w-56">Add To Cart</button>
      </div>
    </div>
  );
};

export default ClothingProduct;
