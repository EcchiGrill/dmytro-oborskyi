import { Request } from 'express'
import { JwtPayload } from './jwtPayload'

export interface UserRequest extends Request {
  user: JwtPayload
}
