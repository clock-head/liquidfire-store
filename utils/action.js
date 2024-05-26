'use server';

import prisma from './db';
import { revalidatePath } from 'next/cache';

export const getOneIslandById = async (id) => {
  return await prisma.island.findUnique({
    where: {
      id: id,
    },
  });
};

export const getOneShopById = async (id) => {
  return await prisma.shop.findUnique({
    where: {
      id: id,
    },
  });
};

export const getOneIslandByName = async (name) => {
  return await prisma.island.findFirst({
    where: {
      name: name,
    },
  });
};

export const getAllIslands = async () => {
  return await prisma.island.findMany({
    orderBy: {
      count: 'asc',
    },
  });
};

export const createIsland = async (value) => {
  try {
    const islands = await prisma.island.findMany();

    const island = await prisma.island.create({
      data: {
        name: value,
        count: islands.length + 1,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const getOneShopByIslandIdAndType = async (islandId, shopType) => {
  return await prisma.shop.findFirst({
    where: {
      island_id: islandId,
      type: parseInt(shopType),
    },
  });
};

export const getAllShops = async () => {
  return await prisma.shop.findMany({
    orderBy: {
      type: 'asc',
    },
  });
};

export const getAllProductsByShopAndIsland = async (shopId, islandId) => {
  return await prisma.product.findMany({
    where: {
      AND: [
        {
          shop_id: shopId,
        },
        {
          island_id: islandId,
        },
      ],
    },
  });
};

export const createShop = async (queryObject, name) => {
  try {
    const island = await prisma.island.findFirst({
      where: {
        name: name,
      },
    });

    if (island) {
      queryObject.island_id = island.id;
    } else {
      throw new Error('island not found.');
    }

    await prisma.shop.create({
      data: queryObject,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const createProduct = async (islandId, shopId, productCode) => {
  try {
    const product = await prisma.product.create({
      island_id: islandId,
      shop_id: shopId,
      product_code: productCode,
    });
  } catch (error) {
    throw new Error(error);
  }
};
