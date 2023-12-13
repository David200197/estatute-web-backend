import { Either } from '@src/common/lib/either.lib';
import { RefreshAuthResponseDto } from '../../dto/refresh-auth-response.dto';
import { RefreshAuthCommand } from './refresh-auth.command';
import { HttpException } from '@nestjs/common';
export interface RefreshAuthHandlerModel {
  execute(
    refreshAuthCommand: RefreshAuthCommand,
  ): Promise<Either<HttpException, RefreshAuthResponseDto>>;
}
