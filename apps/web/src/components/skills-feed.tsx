import { useEffect, useRef, useState } from 'react'
import Javascript from '@/assets/icons/javascript.svg'
import Typescript from '@/assets/icons/typescript.svg'
import React from '@/assets/icons/react.svg'
import NextJS from '@/assets/icons/nextjs.svg'
import Vue from '@/assets/icons/vue.svg'
import NestJS from '@/assets/icons/nestjs.svg'
import GraphQL from '@/assets/icons/graphql.svg'
import Prisma from '@/assets/icons/prisma.svg'
import Docker from '@/assets/icons/docker.svg'
import { motion } from 'motion/react'
import { useInterval } from 'react-use'
import { SKILLS_INTERVAL } from '@/lib/constants'

const skills = [
  { name: 'Javascript', icon: Javascript },
  { name: 'Typescript', icon: Typescript },
  { name: 'React', icon: React },
  { name: 'NextJS', icon: NextJS },
  { name: 'Vue', icon: Vue },
  { name: 'NestJS', icon: NestJS },
  { name: 'GraphQL', icon: GraphQL },
  { name: 'Prisma', icon: Prisma },
  { name: 'Docker', icon: Docker },
]

export function SkillsFeed({
  order = 'default',
  direction = 'vertical',
}: {
  order?: 'default' | 'reverse'
  direction?: 'vertical' | 'horizontal'
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [itemSize, setItemSize] = useState(0)
  const extendedSkills =
    order === 'default'
      ? [...skills, ...skills]
      : [...skills, ...skills].reverse()

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      const firstItem = containerRef.current.children[0] as HTMLElement
      setItemSize(
        direction === 'vertical'
          ? firstItem.offsetHeight
          : firstItem.offsetWidth,
      )
    }
  }, [direction])

  useEffect(() => {
    if (containerRef.current && itemSize > 0) {
      const transform =
        direction === 'vertical'
          ? `translateY(-${currentIndex * itemSize}px)`
          : `translateX(-${currentIndex * itemSize}px)`
      containerRef.current.style.transform = transform
    }
  }, [currentIndex, itemSize, direction])

  const nextItem = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length)

  useInterval(nextItem, SKILLS_INTERVAL)

  const containerClass =
    direction === 'vertical'
      ? 'flex flex-col space-y-16'
      : 'flex flex-row space-x-16'

  const itemClass = direction === 'vertical' ? 'h-[20vh] w-full' : 'w-[20vw]'

  return (
    <div className="relative w-full sm:h-home overflow-hidden">
      <div
        ref={containerRef}
        className={`absolute inset-0 transition-transform duration-1000 ease-in-out  ${containerClass}`}
        style={{ willChange: 'transform' }}
      >
        {extendedSkills.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className={`flex items-center justify-center ${itemClass}`}
          >
            <motion.div
              className="flex flex-col items-center space-y-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <skill.icon />
              <h3 className="text-2xl font-semibold">{skill.name}</h3>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
