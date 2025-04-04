'use client'
import Image from 'next/image'
import { motion } from 'motion/react'
import { SkillsFeed } from '../skills-feed'
import { useTranslations } from 'next-intl'
import Socials from '../socials'

function Home() {
  const t = useTranslations('Home')

  return (
    <section className="grid grid-cols-1 max-sm:grid-rows-home sm:grid-cols-home place-content-center gap-5 md:gap-14 relative snap-start lg:pt-20">
      <SkillsFeed className="max-sm:hidden" />
      <SkillsFeed className="sm:hidden" direction="horizontal" />
      <div className="max-md:px-10 grid grid-cols-1 2xl:grid-cols-3 my-auto text-7xl 3xl:text-8xl gap-y-4 lg:gap-y-10">
        <motion.div
          initial={{ scaleY: 0, x: 100 }}
          whileInView={{ scaleY: 1, x: 0 }}
          className="max-2xl:hidden justify-self-end"
        >
          {t('hello')}
        </motion.div>

        <Image
          src="/portrait.png"
          alt="Portrait"
          width="500"
          height="500"
          priority={true}
          className="justify-self-center min-h-64 min-w-64 max-md:w-52"
        />

        <div className="text-3xl md:text-6xl flex gap-3 justify-center 2xl:hidden">
          <motion.div
            initial={{ scaleY: 0, x: -100 }}
            whileInView={{ scaleY: 1, x: 0 }}
          >
            {t('hello')}
          </motion.div>

          <motion.div
            initial={{ scaleY: 0, x: 100 }}
            whileInView={{ scaleY: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="whitespace-pre -ml-1.5"
          >
            {t('name')}
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleY: 0, x: -100 }}
          whileInView={{ scaleY: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="max-2xl:hidden self-end whitespace-pre"
        >
          {t('name')}
        </motion.div>

        <motion.div
          className="flex flex-col place-items-center 2xl:col-start-2"
          initial={{ scaleX: 0, y: 100 }}
          whileInView={{ scaleX: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="text-2xl md:text-4xl lg:text-5xl whitespace-pre opacity-60">
            {'// Full-stack Developer //'}
          </div>
          <Socials />
        </motion.div>
      </div>
      <SkillsFeed order="reverse" className="max-sm:hidden" />

      <SkillsFeed
        order="reverse"
        direction="horizontal"
        className="sm:hidden"
      />
    </section>
  )
}

export default Home
