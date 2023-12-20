import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthForbiddenException } from '../exceptions/auth-forbidden.exception';
import { AdminNotFoundException } from '@src/features/admin/exceptions/admin-not-found.exception';
import { ADMIN_SERVICE_TOKEN } from '../providers/admin-service.provider';
import { AdminServiceModel } from '../models/admin-service.model';

type RefreshPayload = {
  username: string;
};

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(
    configService: ConfigService,
    @Inject(ADMIN_SERVICE_TOKEN)
    private readonly adminService: AdminServiceModel,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('jwt.refresh_secret'),
      passReqToCallback: true,
    });
  }

  async validate(req: Request, { username }: RefreshPayload) {
    const refreshToken = req.get('Authorization').replace('Bearer', '').trim();
    const adminEther = await this.adminService.validateAdmin({ username });
    const admin = adminEther.fold(
      (error) => {
        if (error instanceof AdminNotFoundException)
          throw new AuthForbiddenException();
        throw error;
      },
      (value) => value,
    );
    return { admin, refreshToken };
  }
}
