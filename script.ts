//const { PrismaClient } = require('@prisma/client')
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

async function main() {
  // Prisma Client queries
  const room = await prisma.room.create({
    data: {
      name: 'Room One',
    },
  })
  const chairOne = await prisma.chair.create({
    data: {
      name: '1.sor 1.szek',
      roomId: 1
    },
  })
  const chairTwo = await prisma.chair.create({
    data: {
      name: '1.sor 2.szek',
      roomId: 1
    },
  })
  console.log(room)
  console.log(chairOne)
  console.log(chairTwo)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })