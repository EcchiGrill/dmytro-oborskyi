import Link from 'next/link'
import Github from '@/assets/icons/github.svg'
import Linkedin from '@/assets/icons/linkedin.svg'
import Email from '@/assets/icons/email.svg'
import Upwork from '@/assets/icons/upwork.svg'

const socialItems = [
  { icon: Github, href: process.env.NEXT_PUBLIC_GITHUB_LINK },
  { icon: Linkedin, href: process.env.NEXT_PUBLIC_LINKEDIN_LINK },
  { icon: Email, href: process.env.NEXT_PUBLIC_EMAIL },
  { icon: Upwork, href: process.env.NEXT_PUBLIC_UPWORK_LINK },
]

const Socials = () => {
  return (
    <div>
      <ul className="flex gap-2 mt-5 opacity-80 ">
        {socialItems.map((item, i) => (
          <Link
            key={i}
            href={
              item.href?.includes('@')
                ? `mailto:${item.href as string}`
                : (item.href as string)
            }
            target="_blank"
            className="hover:opacity-85 duration-200 transition"
          >
            <item.icon />
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Socials
