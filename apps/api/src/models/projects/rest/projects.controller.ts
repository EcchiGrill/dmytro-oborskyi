import { Project } from './entities/project.entity'
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { CreateProject } from './dtos/create-project.dto'
import { UpdateProject } from './dtos/update-project.dto'
import { ProjectsService } from '../projects.service'
import { ProjectsQueryDto } from './dtos/query.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@ApiTags('projects')
@Controller('projects')
@UsePipes(new ValidationPipe())
export class ProjectsController {
  constructor(
    private readonly projectsService: ProjectsService,
    private readonly prisma: PrismaService,
  ) {}

  @ApiOkResponse({
    description: 'Get projects.',
    type: [Project],
  })
  @Get()
  getProjects(@Query() { order, sortBy }: ProjectsQueryDto) {
    return this.prisma.project.findMany({
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({
    description: 'Get featured projects.',
    type: [Project],
  })
  @Get('featured')
  getFeaturedProjects(@Query() { order, sortBy }: ProjectsQueryDto) {
    return this.prisma.project.findMany({
      where: {
        featured: {
          isNot: null,
        },
      },
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiCreatedResponse({
    description:
      'The project has been successfully added to featured collection.',
    type: Project,
  })
  @Post('featured/:uid')
  async addFeaturedProject(@Param('uid', ParseUUIDPipe) uid: string) {
    return this.projectsService.addFeaturedProject(uid)
  }

  @ApiCreatedResponse({
    description:
      'The project has been succesfully removed from featured collection.',
  })
  @Delete('featured/:uid')
  removeFeaturedProject(@Param('uid', ParseUUIDPipe) uid: string) {
    return this.projectsService.removeFeaturedProject(uid)
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
  @Put(':uid')
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
