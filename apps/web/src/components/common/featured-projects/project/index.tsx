'use client'
import { akshar, roboto } from '@/assets/fonts'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { IProjectProps } from './project.props'
import { useLocale, useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

const Project = ({
  index,
  name,
  link,
  img,
  description,
  description_uk,
}: IProjectProps) => {
  const t = useTranslations('Projects')
  const locale = useLocale()
  const [descriptionText, setDescriptionText] = useState(description)

  useEffect(() => {
    if (locale === 'uk') {
      setDescriptionText(description_uk)
    } else {
      setDescriptionText(description)
    }
  }, [locale])

  return (
    <div className="h-screen w-screen flex items-center snap-center relative">
      <div
        className={cn(
          'bg-aside h-full w-1/2 xl:w-1/3 min-w-[10rem] flex place-items-center place-content-center px-12',

          index % 2 ? '' : 'absolute right-0',
        )}
      >
        <div className="text-white flex flex-col gap-2">
          <h1
            className={cn('text-5xl md:text-8xl text-gray', akshar.className)}
          >
            0{index}
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold">{name}</h2>
          <div
            className={cn(
              'mt-1.5 flex flex-col gap-1 max-md:text-sm ',
              roboto.className,
            )}
          >
            <p className="text-gray-light">{descriptionText}</p>
            <div className="mt-1 flex items-center font-semibold hover:opacity-85 transition-opacity duration-200 whitespace-pre">
              <Link href={link}>{t('view')}</Link>
              <ArrowRight className="h-4" />
            </div>
          </div>
        </div>
      </div>
      <Image
        src={img}
        alt={name}
        className={cn(
          'absolute lg:right-20 4xl:right-72 -z-10 max-h-[120vh]',
          index % 2 ? '' : 'lg:left-20 4xl:left-72',
        )}
        width={1000}
        height={100}
      />
    </div>
  )
}

export default Project
