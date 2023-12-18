import { Injectable } from '@nestjs/common';
import { AuthUtilServiceModel } from '../models/auth-util-service.model';
import { LoginAuthResponseDto } from '../dto/login-auth-response.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthUtilService implements AuthUtilServiceModel {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  getTokens(username: string): LoginAuthResponseDto {
    const jwtSecret = this.configService.get('jwt.secret');
    const jwtTime = this.configService.get('jwt.time');
    const jwtRefreshSecret = this.configService.get('jwt.refresh_secret');
    const jwtRefreshTime = this.configService.get('jwt.refresh_time');
    return {
      accessToken: this.jwtService.sign(
        { username },
        {
          privateKey: jwtSecret,
          expiresIn: jwtTime,
        },
      ),
      refreshToken: this.jwtService.sign(
        { username },
        {
          privateKey: jwtRefreshSecret,
          expiresIn: jwtRefreshTime,
        },
      ),
    };
  }
}
