'use client'
import { useSuspenseQuery } from '@apollo/client'
import {
  FeaturedProjectsDocument,
  SortOrder,
} from 'dmytro-oborskyi_network/src/gql/generated'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { rokkit } from '@/assets/fonts'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Project from './project'
import { useTranslations } from 'next-intl'

function FeaturedProjects() {
  const t = useTranslations('Projects')

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
        className={cn(
          'absolute left-0 right-0 mx-auto bottom-10 w-fit',
          rokkit,
        )}
        initial={{ y: -100 }}
        whileInView={{ y: 0 }}
        whileHover={{ scale: 1.1 }}
      >
        <Link href={process.env.NEXT_PUBLIC_GITHUB_LINK || 'link_not_provided'}>
          <Button className="p-6 px-7 text-xl">
            {t('explore')} <ArrowUpRight className="min-w-6 min-h-6" />
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}

export default FeaturedProjects
