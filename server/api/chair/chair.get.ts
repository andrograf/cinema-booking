import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const chairs = await prisma.chair.findMany()
  console.log(chairs)
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
