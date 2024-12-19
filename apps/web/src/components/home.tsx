'use client'
import Header from '@/components/header'
import Image from 'next/image'
import Github from '@/assets/icons/github.svg'
import Linkedin from '@/assets/icons/linkedin.svg'
import Email from '@/assets/icons/email.svg'
import Upwork from '@/assets/icons/upwork.svg'
import { motion } from 'motion/react'
import Link from 'next/link'
import SkillsFeed from './skills-feed'

const socialItems = [
  { icon: Github, href: '#github' },
  { icon: Linkedin, href: '#linkedin' },
  { icon: Email, href: '#email' },
  { icon: Upwork, href: '#upwork' },
]

function Home() {
  return (
    <>
      <Header />
      <main className="grid grid-cols-2 place-items-center pl-8 pr-1 gap-4 h-[calc(100vh-6rem)] relative">
        <div className="text-3xl md:text-7xl lg:text-8xl">
          <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }}>
            Hello,
          </motion.div>
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ delay: 0.5 }}
          >
            {"I'm Dmytro!"}
          </motion.div>
          <div className="text-lg md:text-3xl whitespace-nowrap mt-3 opacity-60">
            {'// Full-stack Developer //'}
          </div>
          <ul className="flex gap-2 mt-4 opacity-80 ">
            {socialItems.map((item) => (
              <Link key={item.href} href={item.href} target="_blank">
                <item.icon />
              </Link>
            ))}
          </ul>
        </div>
        <Image
          src="/portrait.png"
          alt="Portrait"
          width="0"
          height="0"
          priority={true}
          sizes="100vw"
          className="w-auto h-auto"
        />
        <div className="absolute w-full bottom-0">
          <SkillsFeed />
        </div>
      </main>
    </>
  )
}

export default Home
