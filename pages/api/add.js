import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const json = req.body;

  const prisma = new PrismaClient();

  const result = await prisma.users.create({
    data: {
      name: json.name,
      memo: json.memo
    },
  });

  // const result = await prisma.users.findMany({
  //   where: {
  //     name: result.name,
  //     memo: result.memo
  //   },
  // });


  res.status(200).json({
    'result': 'OK'
  });
}