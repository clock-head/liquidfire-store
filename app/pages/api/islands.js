import prisma from '@/utils/db';

// write get handler here.

// const getHandler = (body) => {
//   const
// };

const postHandler = async (body) => {
  const { name } = req.body;
  try {
    const island = await prisma.island.create({
      data: {
        name,
      },
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to create island',
    });
  }
};

export default async function handler(req, res) {
  if (req.method === 'GET') {
  }

  if (req.method === 'POST') {
    await postHandler(req.body);
  } else {
    res.status(405).json({
      message: 'Method not allowed',
    });
  }
}
