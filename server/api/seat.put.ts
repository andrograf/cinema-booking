import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
let id = 0;
let stat = ""
let sDate = "00:00:00"
let eDate = "00:00:00"
async function main() {
  const seats = await prisma.chair.update({
    where: {
        chairId: id
    },
    data: {
        status: stat,
        reservationStartDate: sDate,
        reservationEndDate: eDate
    }
  })
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
