import { Module } from '@nestjs/common'
import { AuthModule } from 'src/auth/auth.module'
import { ProjectsResolver } from './graphql/projects.resolver'
import { ProjectsController } from './rest/projects.controller'
import { ProjectsService } from './projects.service'

@Module({
  imports: [AuthModule],
  controllers: [ProjectsController],
  providers: [ProjectsResolver, ProjectsService],
})
export class ProjectsModule {}
