import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthUtilServiceModel } from '../models/auth-util-service.model';
import { AuthForbiddenException } from '../exceptions/auth-forbidden.exception';
import { AUTH_UTILS_SERVICE_MODEL } from '../providers/auth-util-service.provider';
import { AdminNotFoundException } from '@src/features/admin/exceptions/admin-not-found.exception';

type JwtPayload = {
  username: string;
};

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    configService: ConfigService,
    @Inject(AUTH_UTILS_SERVICE_MODEL)
    private readonly authUtilsService: AuthUtilServiceModel,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('jwt.secret'),
    });
  }

  async validate(payload: JwtPayload) {
    const adminEther = await this.authUtilsService.validateAdmin(payload);
    const admin = adminEther.fold(
      (error) => {
        if (error instanceof AdminNotFoundException)
          throw new AuthForbiddenException();
        throw error;
      },
      (value) => value,
    );
    return { admin };
  }
}
