import { PrismaClient } from '@prisma/client';
import { Router } from 'next/router';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export default async function handler(req, res) {
  const json = req.body;

  const prisma = new PrismaClient();
  console.log(req.query.city);
  const result = await prisma.sightseeing.findMany({
    where: {
      city: req.query.city,
    },
  });

  res.status(200).json({
    'result': 'OK',
    place: result[getRandomInt(0,result.length)].place
  });
}