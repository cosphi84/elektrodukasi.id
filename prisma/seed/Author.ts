import { PrismaClient } from 'generated/prisma'

const prisma = new PrismaClient()

async function main() {
  const Risam = await prisma.user.upsert({
    where: {email: 'risam1984@gmail.com'},
    update: {},
    create: {
        uname: 'Kang Risam',
        real_name: 'Risam, S.T',
        bio: 'Electronics Engineer, Web Programmer',
        description: 'Berasal dari sebuah kota kecil di Jawa Tengah, tepatnya Purwokerto bla bla bla',
        password: 'sdadasdasdsaas',
        email: 'risam1984@gmail.com',
        foto: '1675665465045.jpeg',
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.log(e)
    await prisma.$disconnect()
    process.exit(1)
  })
