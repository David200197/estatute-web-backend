import { HttpException, Inject, Injectable } from '@nestjs/common';
import { AuthUtilServiceModel } from '../models/auth-util-service.model';
import { Either } from '@src/common/lib/either.lib';
import {
  AdminModel,
  AdminProperties,
} from '@src/features/admin/models/admin.model';
import { LoginAuthResponseDto } from '../dto/login-auth-response.dto';
import { EventEmitterServiceModel } from '@src/shared/event-emitter/event-emitter-service.model';
import { EVENT_EMITTER_SERVICE_TOKEN } from '@src/shared/event-emitter/event-emitter-service.provider';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { emitter, responseListeners } from '@src/common/constants/emitters';

@Injectable()
export class AuthUtilService implements AuthUtilServiceModel {
  constructor(
    @Inject(EVENT_EMITTER_SERVICE_TOKEN)
    private readonly eventEmitterService: EventEmitterServiceModel,
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

  async validateAdmin(filter: DeepPartial<AdminProperties>) {
    const listener = await this.eventEmitterService.emitAsync(
      emitter.authValidateAdmin,
      filter,
    );
    const admin = listener.get<Either<HttpException, AdminModel>>(
      responseListeners.adminAuthValidateAdmin,
    );
    return admin;
  }

  async updateRefreshToken(
    filter: DeepPartial<AdminProperties>,
    refreshToken: string,
  ) {
    const listener = await this.eventEmitterService.emitAsync(
      emitter.authUpdateRefreshToken,
      filter,
      refreshToken,
    );
    const admin = listener.get<Either<HttpException, AdminModel>>(
      responseListeners.adminAuthUpdateRefreshToken,
    );
    return admin;
  }
}
