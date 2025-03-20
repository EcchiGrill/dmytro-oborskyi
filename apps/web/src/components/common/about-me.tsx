import { Pencil, Star } from 'lucide-react'
import Link from 'next/link'
import ProjectsCarousel from '../projects-carousel'

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
  return (
    <section
      className="relative h-screen w-screen px-10 snap-center"
      id="about-me"
    >
      <div className="px-16 m-auto flex flex-col place-items-center place-content-center h-full">
        <h1 className="text-5xl text-center mb-44">About me</h1>
        <div className="flex place-content-center gap-[40rem]">
          <div className="flex flex-col gap-10">
            <div>
              <span className="text-xl flex gap-2 items-center opacity-65">
                <Pencil />
                PERSONAL INFO
              </span>
              <ul className="list-none font-semibold text-lg mt-2">
                <li>
                  Name:{' '}
                  <span className="opacity-50 font-thin">Dmytro Oborskyi</span>
                </li>
                <li>
                  Date of birth:{' '}
                  <span className="opacity-50 font-thin">05.10.2005</span>
                </li>
                <li>
                  Email:{' '}
                  <span className="opacity-50 font-thin">
                    dmitry.oborsky@gmail.com
                  </span>
                </li>
                <li>
                  Location:{' '}
                  <span className="opacity-50 font-thin">Kyiv, Ukraine</span>
                </li>
              </ul>
            </div>
            <div>
              <span className="text-xl flex gap-2 items-center opacity-65">
                <Star />
                MAIN SKILLS
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
              className="underline opacity-70 mt-16"
            >
              DOWNLOAD CV
            </Link>
          </div>
          <div className="flex flex-col max-w-[50rem] place-items-center gap-16">
            <p className="max-w-[50rem] text-xl opacity-80">
              {`Hello! I'm a full-stack developer with a strong fundamentals in core
            libraries and frameworks, including React, Next, Vue, GraphQL,
            Prisma, ExpressJS. I use TypeScript in my projects to ensure
            maintainability, scalability, and clean, efficient code. With a
            passion for continuous growth, I am committed to discover best
            practices and staying ahead of emerging trends to deliver top-tier
            solutions. I'm always eager to take on new challenges and
            collaborate on exciting projects!`}
            </p>
            <ProjectsCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
