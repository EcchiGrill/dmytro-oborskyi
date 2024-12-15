import { Module } from '@nestjs/common'
import { ProjectsService } from './projects.service'
import { ProjectsResolver } from './projects.resolver'
import { PrismaService } from 'src/utils/prisma'

@Module({
  providers: [ProjectsResolver, ProjectsService, PrismaService],
})
export class ProjectsModule {}
