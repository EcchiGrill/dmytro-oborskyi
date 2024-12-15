import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/utils/prisma'
import { CreateProjectInput } from './dto/create-project.input'
import { UpdateProjectInput } from './dto/update-project.input'

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProjectInput: CreateProjectInput) {
    return this.prisma.project.create({ data: createProjectInput })
  }

  update(uid: string, updateProjectInput: UpdateProjectInput) {
    return this.prisma.project.update({
      where: { uid },
      data: updateProjectInput,
    })
  }

  findAll() {
    return this.prisma.project.findMany()
  }
}
