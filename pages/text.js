import { PrismaClient } from '@prisma/client';

export default function Db(props) {
  return (
    <div>     
     {props.sightseeing.map((sightseeings, index) =>
        <div key={sightseeings.city,sightseeings.place}>
          {sightseeings.place}
          {sightseeings.city}
        </div>
     )}
    </div>
  );
}

export async function getServerSideProps() {
    const prisma = new PrismaClient();

    const result = await prisma.sightseeing.findMany({
        where: {
          city: '伊勢'
        }
      });
    return {
        props: {
        sightseeing: result,
        }
    };
}