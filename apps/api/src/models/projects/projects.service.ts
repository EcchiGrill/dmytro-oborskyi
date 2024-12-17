import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateProjectInput } from './graphql/dtos/create-project.input'
import { UpdateProjectInput } from './graphql/dtos/update-project.input'

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}

  getProjects() {
    return this.prisma.project.findMany()
  }

  getProject(uid: string) {
    return this.prisma.project.findUnique({
      where: { uid },
    })
  }

  createProject(data: CreateProjectInput) {
    return this.prisma.project.create({ data })
  }

  updateProject(uid: string, data: UpdateProjectInput) {
    return this.prisma.project.update({
      where: { uid },
      data,
    })
  }

  removeProject(uid: string) {
    return this.prisma.project.delete({ where: { uid } })
  }
}
