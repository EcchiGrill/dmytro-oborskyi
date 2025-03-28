import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateProjectInput } from './graphql/dtos/create-project.input'
import { UpdateProjectInput } from './graphql/dtos/update-project.input'
import { ProjectsArgs } from './graphql/dtos/projects.args'

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}

  getProjects(args: ProjectsArgs) {
    return this.prisma.project.findMany(args)
  }

  getFeaturedProjects(args: ProjectsArgs) {
    return this.prisma.project.findMany({
      ...args,
      where: {
        featured: {
          isNot: null,
        },
      },
    })
  }

  async addFeaturedProject(uid: string) {
    const featuredIds = await this.prisma.featuredProject.findMany()

    if (featuredIds.length > 3)
      throw new HttpException(
        'Max length of 3 is reached',
        HttpStatus.BAD_REQUEST,
      )

    if (featuredIds.find((o) => o.uid === uid))
      throw new HttpException(
        'This project is already featured',
        HttpStatus.BAD_REQUEST,
      )

    return this.prisma.featuredProject.create({
      data: {
        uid,
      },
      include: {
        project: true,
      },
    })
  }

  async removeFeaturedProject(uid: string) {
    const featuredIds = await this.prisma.featuredProject.findMany()

    if (!featuredIds.find((o) => o.uid === uid))
      throw new HttpException(
        'This project is not featured or does not exist',
        HttpStatus.NOT_FOUND,
      )

    return this.prisma.featuredProject.delete({
      where: { uid },
    })
  }

  async getProject(uid: string) {
    const featuredIds = await this.prisma.featuredProject.findMany()

    if (!featuredIds.find((o) => o.uid === uid))
      throw new HttpException(
        'This project does not exist',
        HttpStatus.NOT_FOUND,
      )

    return this.prisma.project.findUnique({
      where: { uid },
    })
  }

  createProject(data: CreateProjectInput) {
    return this.prisma.project.create({ data })
  }

  async updateProject(uid: string, data: UpdateProjectInput) {
    const featuredIds = await this.prisma.project.findMany()

    if (!featuredIds.find((o) => o.uid === uid))
      throw new HttpException(
        'This project does not exist',
        HttpStatus.NOT_FOUND,
      )

    return this.prisma.project.update({
      where: { uid },
      data,
    })
  }

  async removeProject(uid: string) {
    const featuredIds = await this.prisma.project.findMany()

    if (!featuredIds.find((o) => o.uid === uid))
      throw new HttpException(
        'This project does not exist',
        HttpStatus.NOT_FOUND,
      )

    return this.prisma.project.delete({ where: { uid } })
  }
}
