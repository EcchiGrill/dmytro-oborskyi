'use client'
import { useSuspenseQuery } from '@apollo/client'
import {
  FeaturedProjectsDocument,
  SortOrder,
} from '@dmytro-oborskyi/network/src/gql/generated'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { rokkit } from '@/assets/fonts'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Project from './project'

function FeaturedProjects() {
  const { data } = useSuspenseQuery(FeaturedProjectsDocument, {
    variables: { orderBy: { order: SortOrder.Asc } },
  })

  return (
    <section className="relative">
      {data?.featuredProjects.map((project, i) => (
        <Project
          name={project.name}
          link={project.link}
          index={i + 1}
          img={
            project.img_laptop ||
            project.img_mobile ||
            project.img_desktop ||
            project.img
          }
          description={project.description}
          key={project.uid}
        />
      ))}
      <motion.div
        className={cn('absolute left-1/2 bottom-10 ', rokkit)}
        initial={{ y: -100 }}
        whileInView={{ y: 0 }}
        whileHover={{ scale: 1.1 }}
      >
        <Link href={process.env.NEXT_PUBLIC_GITHUB_LINK || 'link_not_provided'}>
          <Button className="p-6 px-7 text-xl">
            Explore More <ArrowUpRight className="min-w-6 min-h-6" />
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}

export default FeaturedProjects
