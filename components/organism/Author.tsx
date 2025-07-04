import SocialIcon from '@/components/cell/social-icons'
import Image from '../cell/image'

export default function AuthorLayout() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
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
              className="mb-5 h-48 w-48 rounded-2xl shadow-2xl shadow-black"
            />
            <h3 className="pt-4 pb-2 text-2xl leading-8 font-bold tracking-tight">Risam, S.T</h3>
            <div className="text-center text-gray-500 dark:text-gray-400">
              Electronics Engineer, Home-App Technician, Web Programmer
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none pt-8 pb-8 text-justify xl:col-span-2">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum."
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
