import AboutMe from '@/components/common/about-me'
import FeaturedProjects from '@/components/common/featured-projects'
import Header from '@/components/common/header'
import Home from '@/components/common/home'
import Portfolio from '@/components/common/portfolio'
import ProjectSkeleton from '@/components/project-skeleton'
import { Suspense } from 'react'

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Suspense fallback={<ProjectSkeleton />}>
        <FeaturedProjects />
      </Suspense>
      <AboutMe />
      <Portfolio />
    </>
  )
}
