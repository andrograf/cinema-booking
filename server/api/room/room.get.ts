import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const rooms = await prisma.room.findMany()
  console.log(rooms)
  return rooms
}

main()
  .then(async (r) => {
    await prisma.$disconnect()
    return r
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })