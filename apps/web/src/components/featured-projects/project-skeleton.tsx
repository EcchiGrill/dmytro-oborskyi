import { Skeleton } from '../ui/skeleton'

function ProjectSkeleton() {
  return (
    <section className="h-screen w-screen relative flex items-center snap-center">
      <Skeleton className="h-full w-1/2 xl:w-1/3 min-w-[10rem]" />
      <Skeleton className="absolute h-full w-full -z-10" />
    </section>
  )
}

export default ProjectSkeleton
