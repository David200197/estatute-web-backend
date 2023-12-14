import { UseGuards } from '@nestjs/common';
import { RefreshTokenGuard } from '../guards/refresh-token.guard';

export const RefreshTokenAuth = () => UseGuards(RefreshTokenGuard);
