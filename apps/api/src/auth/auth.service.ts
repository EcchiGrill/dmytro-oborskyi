import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { LoginDto } from './dto/login.dto'
import { JwtService } from '@nestjs/jwt'
import { JwtPayload } from './types/jwtPayload'
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(body: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: body.email },
    })
    if (!user) {
      throw new UnauthorizedException('Invalid credentials')
    }
    const isPasswordValid = await bcrypt.compare(body.password, user.password)
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials')
    }
    const payload: JwtPayload = { sub: user.id, email: user.email }
    return {
      accessToken: this.jwtService.sign(payload),
    }
  }
}
