'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useQuery } from '@apollo/client'
import { Button } from '@/components/ui/button'
import { ProjectsDocument } from '@dmytro-oborskyi/network/src/gql/generated'
import { PROJECTS_CAROUSEL_INTERVAL } from '@/lib/constants'

const ProjectsCarousel = () => {
  const { data: { projects = [] } = {} } = useQuery(ProjectsDocument)
  const [currentIndex, setCurrentIndex] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }, [projects.length])

  // Function to go to previous slide
  const goToPrevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length,
    )
  }, [projects.length])

  // Function to go to a specific slide
  const goToSlide = useCallback(
    (index: number) => {
      setCurrentIndex(index)
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
      timerRef.current = setTimeout(goToNextSlide, PROJECTS_CAROUSEL_INTERVAL)
    },
    [goToNextSlide],
  )

  useEffect(() => {
    timerRef.current = setTimeout(goToNextSlide, PROJECTS_CAROUSEL_INTERVAL)

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [currentIndex, goToNextSlide])

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <div className="relative overflow-hidden rounded-lg aspect-[16/9]">
        {/* Slides */}
        {projects.map((project, index) => (
          <div
            key={project.uid}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000',
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0',
            )}
          >
            <Image
              src={project.img}
              alt={project.name}
              fill
              className="object-cover"
              priority={index === currentIndex}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white">
              <p>{project.name}</p>
            </div>
          </div>
        ))}

        {/* Navigation buttons */}
        <Button
          variant="secondary"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/80 hover:bg-white shadow-md"
          onClick={() => {
            goToPrevSlide()
            if (timerRef.current) clearTimeout(timerRef.current)
          }}
          aria-label="Previous project"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="secondary"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/80 hover:bg-white shadow-md"
          onClick={() => {
            goToNextSlide()
            if (timerRef.current) clearTimeout(timerRef.current)
          }}
          aria-label="Next project"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            type="button"
            className={cn(
              'h-3 w-3 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-ring',
              currentIndex === index
                ? 'bg-primary scale-125'
                : 'bg-muted hover:bg-muted-foreground/50',
            )}
            onClick={() => goToSlide(index)}
            aria-label={`Go to project ${index + 1}`}
            aria-current={currentIndex === index ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectsCarousel
