import { CreateProjectInput } from './dto/create-project.input'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { ProjectsService } from './projects.service'
import { UpdateProjectInput } from './dto/update-project.input'
import { Project } from './entities/project.entity'

@Resolver(() => Project)
export class ProjectsResolver {
  constructor(private readonly projectsService: ProjectsService) {}

  @Mutation(() => Project)
  createProject(
    @Args('createProjectInput') createProjectInput: CreateProjectInput,
  ) {
    return this.projectsService.create(createProjectInput)
  }

  @Mutation(() => Project)
  updateProject(
    @Args('updateProjectInput') updateProjectInput: UpdateProjectInput,
  ) {
    return this.projectsService.update(
      updateProjectInput.uid,
      updateProjectInput,
    )
  }

  @Query(() => [Project], { name: 'projects' })
  findAll() {
    return this.projectsService.findAll()
  }
}
