import SocialIcon from '@/components/cell/social-icons'
import Image from '@/components/cell/image'
import { PrismaClient } from 'generated/prisma'

export default async function AuthorLayout() {
  const prisma = new PrismaClient()
  const author = await prisma.user.findUnique({
    where: {
      uid: 1,
    },
  })

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h2 className="leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Tentangku
          </h2>
        </div>
        <div className="items-start space-y-2 xl:grid xl:space-y-0 xl:gap-x-8">
          <div className="flex flex-col items-center space-x-2 pt-8 lg:items-start">
            <Image
              src="/1675665465045.jpeg"
              alt="Risam, S.T"
              width={192}
              height={192}
              className="mb-5 h-48 w-48 rounded-2xl shadow-2xl shadow-black dark:shadow-gray-400"
            />
            <h3 className="pt-4 pb-2 text-2xl leading-8 font-bold tracking-tight">
              {author?.real_name}
            </h3>
            <div className="text-center text-gray-500 dark:text-gray-400">{author?.bio}</div>
          </div>
          <div className="prose dark:prose-invert max-w-none pt-8 pb-8 text-justify xl:col-span-2">
            <p>{author?.description}</p>
          </div>
        </div>
      </div>
    </>
  )
}
