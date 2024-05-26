import React from 'react';
import ClothingProduct from '@/components/Clothing/ClothingProduct';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const fetchClothing = async () => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('items not found.');
  }
  const items = await response.json();

  return items;
};

const clothingPage = async () => {
  const items = await fetchClothing();
  // console.log(items, 'items object');

  return (
    <div>
      <ClothingProduct></ClothingProduct>
    </div>
  );
};

export default clothingPage;
