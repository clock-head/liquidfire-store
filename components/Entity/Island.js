import React from 'react';
import ShopList from '../Lists/ShopList';
import ShopForm from '../Forms/ShopForm';
import prisma from '@/utils/db';

const Island = ({ islandId, islandName }) => {
  return (
    <div>
      <ShopList islandId={islandId} islandName={islandName}></ShopList>
      <ShopForm></ShopForm>
    </div>
  );
};

export default Island;
