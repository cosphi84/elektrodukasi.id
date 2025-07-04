import Link from 'next/link'
import headerNavLinks from '@/data/navlinks'
import MobileNav from './MobileNav'

const Header = () => {
  const headerClass =
    'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10 sticky top-0 z-50'
  return (
    <header className={headerClass}>
      <Link href="/" aria-label="Elektrodukasi">
        <div className="flex items-center justify-between">
          <div className="mr-3">Logo</div>
          Elektrodukasi
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hover:text-primary-500 dark:hover:text-primary-400 m-1 font-medium text-gray-900 dark:text-gray-100"
              >
                {link.title}
              </Link>
            ))}
        </div>

        <MobileNav />
      </div>
    </header>
  )
}

export default Header
