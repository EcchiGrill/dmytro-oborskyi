import AboutMe from '@/components/common/about-me'
import FeaturedProjects from '@/components/common/featured-projects'
import Header from '@/components/common/header'
import Home from '@/components/common/home'
import Portfolio from '@/components/common/portfolio'
import ProjectSkeleton from '@/components/project-skeleton'
import { getCookie } from '@/helpers/getCookie'
import { Suspense } from 'react'

export default async function App() {
  const locale = (await getCookie('NEXT_LOCALE')) || 'en'
  return (
    <>
      <Header locale={locale} />
      <Home />
      <Suspense fallback={<ProjectSkeleton />}>
        <FeaturedProjects />
      </Suspense>
      <AboutMe />
      <Portfolio />
    </>
  )
}
