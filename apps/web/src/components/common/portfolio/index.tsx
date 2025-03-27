'use client'
import { useQuery } from '@apollo/client'
import {
  ProjectsDocument,
  SortOrder,
} from 'dmytro-oborskyi_network/src/gql/generated'
import { motion } from 'motion/react'
import ProjectCard from './project-card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

const Portfolio = () => {
  const t = useTranslations('Portfolio')
  const [activeIndex, setActiveIndex] = useState(0)
  const { data } = useQuery(ProjectsDocument, {
    variables: { orderBy: { createdAt: SortOrder.Desc } },
  })

  return (
    <section
      className="relative h-screen w-screen px-10 snap-center"
      id="portfolio"
    >
      <div className="container mx-auto place-content-center flex flex-col h-full gap-10">
        <h1 className="text-5xl">{t('title')}</h1>
        <Carousel
          className="w-full"
          onSelect={(index) => setActiveIndex(index as unknown as number)}
        >
          <CarouselContent>
            {data?.projects.map((project) => (
              <CarouselItem
                key={project.uid}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  initial={{ y: 200 }}
                  whileInView={{ y: 0 }}
                  whileHover={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard
                    name={project.name}
                    link={project.link}
                    tags={project.tags}
                    git_link={project.git_link || project.link}
                    img={project.img}
                    description={project.description}
                  />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex max-md:justify-between justify-end place-items-center mt-4">
            <p className="text-sm text-muted-foreground text-center md:hidden">
              Swipe left or right to view more projects
            </p>
            <div className="flex items-center gap-2 ">
              <CarouselPrevious className="static transform-none" />
              <span className="text-sm text-muted-foreground">
                {activeIndex + 1} / {data?.projects.length}
              </span>
              <CarouselNext className="static transform-none" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  )
}

export default Portfolio
