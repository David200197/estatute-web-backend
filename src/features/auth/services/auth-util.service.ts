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
    return {
      accessToken: this.jwtService.sign(
        { username },
        {
          privateKey: this.configService.get('jwt.secret'),
          expiresIn: this.configService.get('jwt.time'),
        },
      ),
      refreshToken: this.jwtService.sign(
        { username },
        {
          privateKey: this.configService.get('jwt.refresh_secret'),
          expiresIn: this.configService.get('jwt.refresh_time'),
        },
      ),
    };
  }
}
