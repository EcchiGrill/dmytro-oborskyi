import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { RESTAuthGuard } from './rest-auth.guard'
import { GQLAuthGuard } from './gql-auth.guard'

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        secret: config.get('JWT_SECRET'),
        signOptions: { expiresIn: '1d' },
      }),
      inject: [ConfigService],
      global: true,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, RESTAuthGuard, GQLAuthGuard],
  exports: [AuthService, RESTAuthGuard, GQLAuthGuard],
})
export class AuthModule {}
