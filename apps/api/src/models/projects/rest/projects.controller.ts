import { Project } from './entities/project.entity'
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { CreateProject } from './dtos/create-project.dto'
import { UpdateProject } from './dtos/update-project.dto'
import { ProjectsService } from '../projects.service'

@ApiTags('projects')
@Controller('projects')
@UsePipes(new ValidationPipe())
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @ApiOkResponse({
    description: 'Get projects.',
    type: [Project],
  })
  @Get()
  getProjects() {
    return this.projectsService.getProjects()
  }

  @ApiOkResponse({
    description: 'Get project by uid.',
    type: Project,
  })
  @Get(':uid')
  getProject(@Param('uid', ParseUUIDPipe) uid: string) {
    return this.projectsService.getProject(uid)
  }

  @ApiCreatedResponse({
    description: 'The project has been successfully created.',
    type: Project,
  })
  @Post()
  createProject(@Body() dto: CreateProject) {
    return this.projectsService.createProject(dto)
  }

  @ApiOkResponse({
    description: 'The project has been successfully updated.',
    type: Project,
  })
  @Patch(':uid')
  updateProject(
    @Param('uid', ParseUUIDPipe) uid: string,
    @Body() dto: UpdateProject,
  ) {
    return this.projectsService.updateProject(uid, dto)
  }

  @ApiOkResponse({
    description: 'The project has been successfully removed.',
  })
  @Delete(':uid')
  removeProject(@Param('uid', ParseUUIDPipe) uid: string) {
    return this.projectsService.removeProject(uid)
  }
}