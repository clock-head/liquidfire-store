'use server';

import prisma from './db';
import { revalidatePath } from 'next/cache';

export interface Island {
  id: string;
  name: string;
  count: number;
}

export interface Shop {
  id: string;
  island_id: string;
  type: number;
}

export const getOneIslandById = async (id: string) => {
  return await prisma.island.findUnique({
    where: {
      id: id,
    },
  });
};

export const getOneShopById = async (id: string) => {
  return await prisma.shop.findUnique({
    where: {
      id: id,
    },
  });
};

export const getOneIslandByName = async (name: string) => {
  try {
    const island: Island | null = await prisma.island.findFirst({
      where: {
        name: name,
      },
    });
    return island;
  } catch (error) {
    return null;
  }
};

export const getAllIslands = async () => {
  return await prisma.island.findMany({
    orderBy: {
      count: 'asc',
    },
  });
};

export const createIsland = async (value: string) => {
  try {
    const islands = await prisma.island.findMany();

    const island = await prisma.island.create({
      data: {
        name: value,
        count: islands.length + 1,
      },
    });
  } catch (error) {
    throw new Error(String(error));
  }
};

export const getOneShopByIslandIdAndType = async (
  islandId: string,
  shopType: string
) => {
  return await prisma.shop.findFirst({
    where: {
      island_id: islandId,
      type: parseInt(shopType),
    },
  });
};

export const getAllShops = async (islandId: string) => {
  return await prisma.shop.findMany({
    where: {
      island_id: islandId,
    },
  });
};

export const getAllProductsByShopAndIsland = async (
  shopId: string,
  islandId: string
) => {
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

interface createShopQuery {
  island_id: string;
  type: number;
}

export const createShop = async (
  queryObject: createShopQuery,
  name: string
) => {
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
    throw new Error(String(error));
  }
};

async function generateCode(islandId: string, shopId: string) {
  let code = '00';
  const products = await getAllProductsByShopAndIsland(shopId, islandId);
  code = code + products.length;

  return code;
}

export const createProduct = async (
  islandId: string,
  shopId: string,
  name: string,
  price: number,
  type: number,
  image_binary_hash: string
) => {
  try {
    interface createProductQuery {
      island_id: string;
      shop_id: string;
      name: string;
      product_code: string;
      type: number;
      price: number;
      image_binary_hash: string;
    }

    let queryObject: createProductQuery = {
      island_id: islandId,
      shop_id: shopId,
      name: name,
      product_code: await generateCode(islandId, shopId),
      type: type,
      price: price,
      image_binary_hash: image_binary_hash,
    };

    const product = await prisma.product.create({
      data: queryObject,
    });
    revalidatePath('/clockhead/dragon/1');
  } catch (error) {
    throw new Error(String(error));
  }
};
