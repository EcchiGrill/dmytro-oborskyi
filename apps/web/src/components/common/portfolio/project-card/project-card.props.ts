import { IProjectProps } from '../../featured-projects/project/project.props'

export interface IProjectCardProps extends Omit<IProjectProps, 'index'> {
  git_link: string
}
