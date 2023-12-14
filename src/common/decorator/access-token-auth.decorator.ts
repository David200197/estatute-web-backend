import { UseGuards } from '@nestjs/common';
import { AccessTokenGuard } from '../guards/access-token.guard';

export const AccessTokenAuth = () => UseGuards(AccessTokenGuard);
