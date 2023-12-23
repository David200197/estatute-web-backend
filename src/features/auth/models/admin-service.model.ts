import { HttpException } from '@nestjs/common';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { Either } from '@src/common/lib/either.lib';
import { AdminModel, AdminProps } from '@src/features/admin/models/admin.model';

export interface AdminServiceModel {
  validateAdmin(
    filter: DeepPartial<AdminProps>,
  ): Promise<Either<HttpException, AdminModel>>;
  updateRefreshToken(
    filter: DeepPartial<AdminProps>,
    refreshToken: string,
  ): Promise<Either<HttpException, AdminModel>>;
}
