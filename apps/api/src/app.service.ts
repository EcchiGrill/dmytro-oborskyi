import { Injectable } from '@nestjs/common'
import { sum } from '@dmytro-oborskyi/sample-lib'

@Injectable()
export class AppService {
  getHello(): string {
    return `Backend: ${sum(3213123, 321123)}`
  }
}
