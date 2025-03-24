import { Pencil, Star } from 'lucide-react'
import Link from 'next/link'
import ProjectsCarousel from '../projects-carousel'
import { useTranslations } from 'next-intl'

const skills = [
  'Javascript/Typescript',
  'React',
  'Next.js',
  'Vue.js',
  'NestJS',
  'GraphQL',
  'Prisma',
  'Tailwind/SCSS',
]

function AboutMe() {
  const t = useTranslations('AboutMe')
  return (
    <section
      className="relative h-screen w-screen px-10 snap-center"
      id="about-me"
    >
      <div className="px-16 m-auto flex flex-col place-items-center place-content-center h-full gap-32">
        <h1 className="text-5xl text-center max-xl:mt-[14rem]">{t('title')}</h1>
        <div className="flex place-content-center max-xl:flex-col gap-10 xl:gap-[40rem] place-items-center">
          <div className="flex xl:flex-col gap-10">
            <div>
              <span className="text-xl flex gap-2 items-center opacity-65">
                <Pencil />
                {t('info')}
              </span>
              <ul className="list-none font-semibold text-lg mt-2">
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
                  <span className="opacity-50 font-thin">
                    dmitry.oborsky@gmail.com
                  </span>
                </li>
                <li>
                  {t('location-title')}:{' '}
                  <span className="opacity-50 font-thin">{t('location')}</span>
                </li>
              </ul>
            </div>
            <div>
              <span className="text-xl flex gap-2 items-center opacity-65">
                <Star />
                {t('skills')}
              </span>
              <ul className="list-disc text-lg mt-2 ml-3">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <Link
              href={process.env.NEXT_PUBLIC_CV_LINK || 'link_not_provided'}
              target="_blank"
              className="underline opacity-70 mt-4 font-bold text-blue-800 content-end"
            >
              {t('cv')}
            </Link>
          </div>
          <div className="flex flex-col max-w-[50rem] place-items-center gap-4">
            <p className="max-w-[50rem] text-lg opacity-80">
              {t('description')}
            </p>
            <ProjectsCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
