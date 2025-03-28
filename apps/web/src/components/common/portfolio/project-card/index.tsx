'use client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { IProjectCardProps } from './project-card.props'
import { useLocale, useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { translateToUk } from '@/helpers/translateToUk'

const ProjectCard = ({
  description,
  img,
  link,
  name,
  git_link,
  tags,
}: IProjectCardProps) => {
  const t = useTranslations('Portfolio')
  const locale = useLocale()
  const [descriptionText, setDescriptionText] = useState(description)

  const translationHandler = async () => {
    try {
      const data = await translateToUk(description)
      setDescriptionText(data)
    } catch (error) {
      console.error('Translation error:', error)
      setDescriptionText(description)
    }
  }

  useEffect(() => {
    if (locale === 'uk') {
      translationHandler()
    } else {
      setDescriptionText(description)
    }
  }, [locale])

  return (
    <Card className="h-full border overflow-hidden max-w-xl">
      <div className="relative h-72 w-full overflow-hidden">
        <Image
          src={img}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110 "
        />
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{descriptionText}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild variant="outline" size="sm">
          <Link href={git_link} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            {t('code')}
          </Link>
        </Button>
        <Button asChild size="sm">
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            {t('demo')}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard
