import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { JwtPayload } from '../types/jwtPayload'
import { UserRequest } from '../types/userRequest'

export const CurrentUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): JwtPayload => {
    const request = ctx.switchToHttp().getRequest<UserRequest>()
    return request.user
  },
)
