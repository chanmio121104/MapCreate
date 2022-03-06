import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  const result = await prisma.users.findMany({
    where: {
      name: req.query.name,
    },
  });

  res.status(200).json({
    memo: result[0].memo
  });
}