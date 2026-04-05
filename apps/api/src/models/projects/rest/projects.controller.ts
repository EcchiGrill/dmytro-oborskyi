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
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger'
import { PrismaService } from 'src/prisma/prisma.service'
import { RESTAuthGuard } from 'src/auth/rest-auth.guard'
import { Project } from './entities/project.entity'
import { CreateProject } from './dtos/create-project.dto'
import { UpdateProject } from './dtos/update-project.dto'
import { ProjectsService } from '../projects.service'
import { ProjectsQueryDto } from './dtos/query.dto'

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
  @UseGuards(RESTAuthGuard)
  @ApiBearerAuth()
  @Post('featured/:uid')
  async addFeaturedProject(@Param('uid', ParseUUIDPipe) uid: string) {
    return this.projectsService.addFeaturedProject(uid)
  }

  @ApiCreatedResponse({
    description:
      'The project has been succesfully removed from featured collection.',
  })
  @UseGuards(RESTAuthGuard)
  @ApiBearerAuth()
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
  @UseGuards(RESTAuthGuard)
  @ApiBearerAuth()
  @Post()
  createProject(@Body() dto: CreateProject) {
    return this.projectsService.createProject(dto)
  }

  @ApiOkResponse({
    description: 'The project has been successfully updated.',
    type: Project,
  })
  @Put(':uid')
  @UseGuards(RESTAuthGuard)
  @ApiBearerAuth()
  updateProject(
    @Param('uid', ParseUUIDPipe) uid: string,
    @Body() dto: UpdateProject,
  ) {
    return this.projectsService.updateProject(uid, dto)
  }

  @ApiOkResponse({
    description: 'The project has been successfully removed.',
  })
  @UseGuards(RESTAuthGuard)
  @ApiBearerAuth()
  @Delete(':uid')
  removeProject(@Param('uid', ParseUUIDPipe) uid: string) {
    return this.projectsService.removeProject(uid)
  }
}
