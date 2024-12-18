import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Project } from './entities/project.entity'
import { UsePipes, ValidationPipe } from '@nestjs/common'
import { RemoveProjectArgs } from './dtos/remove-project.args'
import { UpdateProjectInput } from './dtos/update-project.input'
import { CreateProjectInput } from './dtos/create-project.input'
import { ProjectsService } from '../projects.service'

@Resolver(() => Project)
export class ProjectsResolver {
  constructor(private readonly projectsService: ProjectsService) {}

  @Query(() => [Project], { name: 'projects' })
  getProjects() {
    return this.projectsService.getProjects()
  }

  @Query(() => [Project], { name: 'featuredProjects' })
  getFeaturedProjects() {
    return this.projectsService.getFeaturedProjects()
  }

  @Mutation(() => Project)
  addFeaturedProject(@Args('uid') uid: string) {
    return this.projectsService.addFeaturedProject(uid)
  }

  @Mutation(() => Project)
  removeFeaturedProject(@Args('uid') uid: string) {
    return this.projectsService.removeFeaturedProject(uid)
  }

  @Query(() => Project)
  getProject(@Args('uid') uid: string) {
    return this.projectsService.getProject(uid)
  }

  @Mutation(() => Project)
  @UsePipes(new ValidationPipe())
  createProject(@Args('createProjectInput') args: CreateProjectInput) {
    return this.projectsService.createProject(args)
  }

  @Mutation(() => Project)
  @UsePipes(new ValidationPipe())
  updateProject(@Args('updateProjectInput') args: UpdateProjectInput) {
    return this.projectsService.updateProject(args.uid, args)
  }

  @Mutation(() => Project)
  removeProject(@Args() args: RemoveProjectArgs) {
    return this.projectsService.removeProject(args.uid)
  }
}
