'use client'
import { useQuery } from '@apollo/client'
import { FeaturedProjectsDocument } from '@dmytro-oborskyi/network/src/gql/generated'
import Project from './project'

function FeaturedProjects() {
  const { data } = useQuery(FeaturedProjectsDocument)

  return (
    <>
      {data?.featuredProjects.map((project, i) => (
        <Project
          name={project.name}
          link={project.link}
          index={i + 1}
          img={
            project.img_laptop ||
            project.img_mobile ||
            project.img_desktop ||
            ''
          }
          description={project.description || ''}
          labelPos={i % 2 ? 'right' : 'left'}
          isLast={i + 1 === data.featuredProjects.length}
          key={project.uid}
        />
      ))}
    </>
  )
}

export default FeaturedProjects
