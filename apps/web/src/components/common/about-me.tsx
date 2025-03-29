'use client'

import { FileText, Pencil, Star } from 'lucide-react'
import Link from 'next/link'
import ProjectsCarousel from '../projects-carousel'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { Button } from '../ui/button'
import { motion } from 'motion/react'
import Javascript from '@/assets/icons/javascript.svg'
import Typescript from '@/assets/icons/typescript.svg'
import React from '@/assets/icons/react.svg'
import NextJS from '@/assets/icons/nextjs.svg'
import Vue from '@/assets/icons/vue.svg'
import NestJS from '@/assets/icons/nestjs.svg'
import GraphQL from '@/assets/icons/graphql.svg'
import Prisma from '@/assets/icons/prisma.svg'
import Docker from '@/assets/icons/docker.svg'
import Tailwind from '@/assets/icons/tailwind.svg'
import PostgreSQL from '@/assets/icons/postgresql.svg'
import HTML from '@/assets/icons/html.svg'
import CSS from '@/assets/icons/css.svg'
import { cn } from '@/lib/utils'

const skills = [
  {
    category: 'frontend',
    icon: React,
    items: [
      { name: 'HTML', icon: HTML },
      { name: 'CSS', icon: CSS },
      { name: 'Tailwind', icon: Tailwind },
      { name: 'Javascript', icon: Javascript },
      { name: 'Typescript', icon: Typescript },
      { name: 'React', icon: React },
      { name: 'Next.js', icon: NextJS },
      { name: 'Vue.js', icon: Vue },
    ],
  },
  {
    category: 'backend',
    icon: GraphQL,
    items: [
      { name: 'NestJS', icon: NestJS },
      { name: 'GraphQL', icon: GraphQL },
      { name: 'Prisma', icon: Prisma },
      { name: 'PostgreSQL', icon: PostgreSQL },
      { name: 'Docker', icon: Docker },
    ],
  },
]

const tabs = [
  {
    name: 'info',
    icon: Pencil,
  },
  {
    name: 'skills',
    icon: Star,
  },
]

function AboutMe() {
  const [currentTab, setCurrentTab] = useState<'skills' | 'info'>('info')
  const t = useTranslations('AboutMe')

  const renderTab = () => {
    switch (currentTab) {
      case 'info':
        return (
          <motion.div
            key="info"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <ul className="list-none font-semibold text-lg whitespace-pre">
              <li>
                {t('name-title')}:{' '}
                <span className="opacity-50 font-thin">{t('name')}</span>
              </li>
              <li>
                {t('date-title')}:{' '}
                <span className="opacity-50 font-thin">05.10.2005</span>
              </li>
              <li>
                {t('email-title')}:{' '}
                <Link
                  href={`mailto:${process.env.NEXT_PUBLIC_EMAIL as string}`}
                  className="opacity-50 font-thin underline"
                >
                  {process.env.NEXT_PUBLIC_EMAIL}
                </Link>
              </li>
              <li>
                {t('phone-title')}:{' '}
                <Link
                  href={`tel:+380953424041`}
                  className="opacity-50 font-thin underline"
                >
                  {'+38(095)342-40-41'}
                </Link>
              </li>
              <li>
                {t('location-title')}:{' '}
                <span className="opacity-50 font-thin">{t('location')}</span>
              </li>
            </ul>
          </motion.div>
        )

      case 'skills':
        return (
          <motion.div
            key="skills"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="grid grid-cols-2 gap-20"
          >
            {skills.map((skill) => (
              <div key={skill.category}>
                <span
                  className={cn(
                    'capitalize flex gap-2 items-center text-xl font-semibold',
                    skill.category === 'frontend'
                      ? 'text-blue-800'
                      : 'text-pink-700',
                  )}
                >
                  <skill.icon className="w-6 h-6 min-w-6 min-h-6" />{' '}
                  {skill.category}:
                </span>
                <ul className="list-none pl-2 mt-4 flex flex-col gap-2.5 text-lg">
                  {skill.items.map((item) => (
                    <li
                      key={item.name}
                      className="text-black opacity-50 flex gap-2 items-center"
                    >
                      <item.icon className="w-5 h-5 min-w-5 min-h-5" />{' '}
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        )

      default:
        return
    }
  }
  return (
    <section
      className="relative h-full w-screen snap-center pt-20 xl:h-screen xl:pt-[8rem] 2xl:pt-[10rem]"
      id="about-me"
    >
      <h1 className="text-5xl text-center">{t('title')}</h1>
      <div className="xl:flex xl:place-content-between 2xl:place-content-center 2xl:gap-[20rem] xl:mt-[10rem] xl:px-10">
        <div className="px-16">
          <div className="mt-10 max-w-[30rem] mx-auto">
            <div className="flex place-content-center gap-2 xs:gap-5">
              {tabs.map((tab, i) => (
                <Button
                  key={i}
                  variant={'ghost'}
                  onClick={() => setCurrentTab(tab.name as 'skills' | 'info')}
                  className={`text-xl border-b-2 border-gray-light rounded-none ${currentTab === tab.name ? 'opacity-100' : 'opacity-50'}`}
                >
                  <tab.icon /> {t(tab.name)}
                </Button>
              ))}
            </div>
            <div className="flex flex-col place-items-center gap-4 mt-10">
              {renderTab()}
              <Link
                href={process.env.NEXT_PUBLIC_CV_LINK || 'link_not_provided'}
                target="_blank"
                className="underline opacity-70 mt-4 font-bold text-blue-800 self-end flex place-items-center gap-2"
              >
                <FileText /> {t('cv')}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 px-5 flex flex-col place-items-center gap-4 xl:max-w-[40rem] 3xl:max-w-[60rem]">
          <p className="max-w-[50rem] text-lg opacity-80 text-center xs:text-justify">
            {t('description')}
          </p>
          <ProjectsCarousel />
        </div>
      </div>
    </section>
  )
}

export default AboutMe
