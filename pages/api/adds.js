import { PrismaClient } from '@prisma/client';
export default async function handler(req, res) {
    const json = req.body;
  
    const prisma = new PrismaClient();
  
    const result = await prisma.sightseeing.create({
      data: {
        city: json.city,
        place: json.place
      },
    });
  
    res.status(200).json({
      'result': 'OK',
    });
  }