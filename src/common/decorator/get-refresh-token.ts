import { createParamDecorator } from '@nestjs/common';

export const GetRefreshToken = createParamDecorator((_, req): string => {
  return req.user.refreshToken;
});
