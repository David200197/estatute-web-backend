import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthForbiddenException } from '../exceptions/auth-forbidden.exception';
import { AdminNotFoundException } from '@src/features/admin/exceptions/admin-not-found.exception';
import { AdminServiceModel } from '../models/admin-service.model';
import { ADMIN_SERVICE_TOKEN } from '../providers/admin-service.provider';

type JwtPayload = {
  username: string;
};

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    configService: ConfigService,
    @Inject(ADMIN_SERVICE_TOKEN)
    private readonly adminService: AdminServiceModel,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('jwt.secret'),
      passReqToCallback: true,
    });
  }

  async validate(req: Request, { username }: JwtPayload) {
    const adminEther = await this.adminService.validateAdmin({ username });
    const admin = adminEther.fold(
      (error) => {
        if (error instanceof AdminNotFoundException)
          throw new AuthForbiddenException();
        throw error;
      },
      (value) => value,
    );
    req['admin'] = admin;
    return true;
  }
}
