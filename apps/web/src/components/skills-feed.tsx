'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useSwipeable } from 'react-swipeable'
import { useHarmonicIntervalFn } from 'react-use'
import { SKILLS_INTERVAL } from '@/lib/constants'
import Javascript from '@/assets/icons/javascript.svg'
import Typescript from '@/assets/icons/typescript.svg'
import React from '@/assets/icons/react.svg'
import NextJS from '@/assets/icons/nextjs.svg'
import Vue from '@/assets/icons/vue.svg'
import NestJS from '@/assets/icons/nestjs.svg'
import GraphQL from '@/assets/icons/graphql.svg'
import Prisma from '@/assets/icons/prisma.svg'
import { motion } from 'motion/react'

const skills = [
  { name: 'Javascript', icon: Javascript },
  { name: 'Typescript', icon: Typescript },
  { name: 'React', icon: React },
  { name: 'NextJS', icon: NextJS },
  { name: 'Vue', icon: Vue },
  { name: 'NestJS', icon: NestJS },
  { name: 'GraphQL', icon: GraphQL },
  { name: 'Prisma', icon: Prisma },
]

function SkillsFeed() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [totalWidth, setTotalWidth] = useState(0)

  useEffect(() => {
    const updateWidths = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth)
        setTotalWidth(containerRef.current.scrollWidth)
      }
    }

    updateWidths()
    window.addEventListener('resize', updateWidths)
    return () => window.removeEventListener('resize', updateWidths)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    const container = containerRef.current
    if (container) {
      const scrollAmount = direction === 'left' ? -200 : 200
      let newScrollPosition = scrollPosition + scrollAmount

      if (newScrollPosition < 0) {
        newScrollPosition = totalWidth - containerWidth
      } else if (newScrollPosition > totalWidth - containerWidth) {
        newScrollPosition = 0
      }

      container.scrollTo({ left: newScrollPosition, behavior: 'smooth' })
      setScrollPosition(newScrollPosition)
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => scroll('right'),
    onSwipedRight: () => scroll('left'),
    preventScrollOnSwipe: true,
    trackMouse: true,
  })

  useHarmonicIntervalFn(() => scroll('right'), SKILLS_INTERVAL)

  return (
    <div className="relative p-4 bg-[#8e8e90]">
      <div className="flex items-center max-w-7xl mx-auto">
        <Button
          variant="outline"
          size="icon"
          className="mr-4 z-10"
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          <ChevronLeft className="min-h-5 min-w-10" />
        </Button>
        <div
          {...handlers}
          ref={containerRef}
          className="flex overflow-x-hidden space-x-4 p-4 touch-pan-x"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              key={index}
              className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 w-40 h-40 flex-shrink-0"
            >
              <skill.icon className="mb-2 opacity-70" aria-hidden="true" />
              <span className="text-center font-medium text-base">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="ml-4 z-10"
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          <ChevronRight className="min-h-5 min-w-10" />
        </Button>
      </div>
    </div>
  )
}

export default SkillsFeed
