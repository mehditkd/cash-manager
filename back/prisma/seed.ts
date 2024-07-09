import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
//
// await prisma.user.create({
//   data: {
//     id: '1',
//     email: 'test@gmail.com',
//     createdBy: 'Test',
//     userName: 'Test'
//   }
// })
//
// await prisma.product.create({
//     data: {
//       id: 33,
//       price: 132.7,
//       description: `Ipsa explicabo sed qui sint voluptate magni. Temporibus id assumenda. Qui quaerat libero voluptas sint quis quia sit cumque. Porro consectetur iusto occaecati dolor quam ducimus quidem laborum. Et sequi reiciendis voluptates. Aut quisquam corporis quaerat quia iure qui vel sequi.`,
//       title: `Global Solutions Designer`,
//       createdBy: `Corine82`,
//       modifiedBy: `gadbin.arnaud8@gmail.com`,
//       createdAt: `Mon Aug 07 2023 13:47:22 GMT+0200 (Central European Summer Time)`,
//       modifiedAt: null
//     }
//   })
// await prisma.cart.create({
//     data: {
//       id: 18,
//       refusalCount: 199.96,
//       cartStatus: `refused`,
//       totalPrice: 244.65,
//       createdBy: `gadbin.arnaud8@gmail.com`,
//       modifiedBy: `Joanny_McCullough91`,
//       createdAt: `Mon Sep 25 2023 04:30:27 GMT+0200 (Central European Summer Time)`,
//       modifiedAt: `Wed Mar 22 2023 05:48:47 GMT+0100 (Central European Standard Time)`,
//       user: {connect:{id: '1'}}
//     }
//   })
// await prisma.bill.create({
//     data: {
//       id: 53,
//       totalPrice: 100.89,
//       choixSimpleText: `cheque`,
//       createdBy: `gadbin.arnaud8@gmail.com`,
//       modifiedBy: `Jeffery4`,
//       createdAt: `Wed May 24 2023 15:58:19 GMT+0200 (Central European Summer Time)`,
//       modifiedAt: null,
//       user: {connect:{id: '1'}}
//     }
//   })
// await prisma.cartRows.create({
//     data: {
//       id: 151,
//       quantity: `32.77`,
//       price: 138.22,
//       createdBy: `gadbin.arnaud8@gmail.com`,
//       modifiedBy: `Nickolas17`,
//       createdAt: `Thu Jun 08 2023 19:30:11 GMT+0200 (Central European Summer Time)`,
//       modifiedAt: `Fri Jun 16 2023 23:39:11 GMT+0200 (Central European Summer Time)`
//     }
//   })
// await prisma.billRows.create({
//     data: {
//       id: 26,
//       quantity: 12,
//       price: 21.96,
//       createdBy: `Luna.Williamson`,
//       modifiedBy: null,
//       createdAt: `Sat Sep 30 2023 16:00:47 GMT+0200 (Central European Summer Time)`,
//       modifiedAt: `Sat Nov 26 2022 22:43:32 GMT+0100 (Central European Standard Time)`
//     }
//   })
}
main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })