import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const seats = await prisma.chair.findMany()
  console.log(seats)
  return seats
}
//main()
export default defineEventHandler(async (event) => {
  const data = main()
  .then(async (r) => {
    await prisma.$disconnect()
    return r
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

  return data
})
