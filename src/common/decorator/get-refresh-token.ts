import { createParamDecorator } from '@nestjs/common';

export const GetRefreshToken = createParamDecorator((_, ctx): string => {
  return ctx.switchToHttp().getRequest().refreshToken;
});
