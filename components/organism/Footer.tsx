import Link from 'next/link'
import SocialIcon from '@/components/cell/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:risam1984@gmail.com`} />
          <SocialIcon kind="github" href="coshpi84" />
          <SocialIcon kind="youtube" href="risam albanjumasy" />
          <SocialIcon kind="linkedin" href="risam albanjumasy" />
          <SocialIcon kind="x" href="cosphi84" />
          <SocialIcon kind="instagram" href="cosphi84" />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>Risam, ST</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">ElektroDukasi.id</Link>
        </div>
      </div>
    </footer>
  )
}
