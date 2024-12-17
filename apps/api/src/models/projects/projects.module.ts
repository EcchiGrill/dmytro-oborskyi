import { Module } from '@nestjs/common'
import { ProjectsResolver } from './graphql/projects.resolver'
import { ProjectsController } from './rest/projects.controller'
import { ProjectsService } from './projects.service'

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsResolver, ProjectsService],
})
export class ProjectsModule {}
