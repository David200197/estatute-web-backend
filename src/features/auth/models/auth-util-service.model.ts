import { HttpException } from '@nestjs/common';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { Either } from '@src/common/lib/either.lib';
import {
  AdminModel,
  AdminProperties,
} from '@src/features/admin/models/admin.model';
import { LoginAuthResponseDto } from '../dto/login-auth-response.dto';

export interface AuthUtilServiceModel {
  validateAdmin(
    filter: DeepPartial<AdminProperties>,
  ): Promise<Either<HttpException, AdminModel>>;
  getTokens(username: string): LoginAuthResponseDto;
  updateRefreshToken(
    filter: DeepPartial<AdminProperties>,
    refreshToken: string,
  ): Promise<Either<HttpException, AdminModel>>;
}
