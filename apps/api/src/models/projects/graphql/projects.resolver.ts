import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards, UsePipes, ValidationPipe } from '@nestjs/common'
import { GQLAuthGuard } from 'src/auth/gql-auth.guard'
import { Project } from './entities/project.entity'
import { RemoveProjectArgs } from './dtos/remove-project.args'
import { UpdateProjectInput } from './dtos/update-project.input'
import { CreateProjectInput } from './dtos/create-project.input'
import { ProjectsService } from '../projects.service'
import { ProjectsArgs } from './dtos/projects.args'

@Resolver(() => Project)
export class ProjectsResolver {
  constructor(private readonly projectsService: ProjectsService) {}

  @Query(() => [Project], { name: 'projects' })
  getProjects(@Args() args: ProjectsArgs) {
    return this.projectsService.getProjects(args)
  }

  @Query(() => [Project], { name: 'featuredProjects' })
  getFeaturedProjects(@Args() args: ProjectsArgs) {
    return this.projectsService.getFeaturedProjects(args)
  }

  @UseGuards(GQLAuthGuard)
  @Mutation(() => Project)
  addFeaturedProject(@Args('uid') uid: string) {
    return this.projectsService.addFeaturedProject(uid)
  }

  @UseGuards(GQLAuthGuard)
  @Mutation(() => Project)
  removeFeaturedProject(@Args('uid') uid: string) {
    return this.projectsService.removeFeaturedProject(uid)
  }

  @Query(() => Project)
  getProject(@Args('uid') uid: string) {
    return this.projectsService.getProject(uid)
  }

  @UseGuards(GQLAuthGuard)
  @Mutation(() => Project)
  @UsePipes(new ValidationPipe())
  createProject(@Args('createProjectInput') args: CreateProjectInput) {
    return this.projectsService.createProject(args)
  }

  @UseGuards(GQLAuthGuard)
  @Mutation(() => Project)
  @UsePipes(new ValidationPipe())
  updateProject(@Args('updateProjectInput') args: UpdateProjectInput) {
    return this.projectsService.updateProject(args.uid, args)
  }

  @UseGuards(GQLAuthGuard)
  @Mutation(() => Project)
  removeProject(@Args() args: RemoveProjectArgs) {
    return this.projectsService.removeProject(args.uid)
  }
}
