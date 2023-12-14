import { createParamDecorator } from '@nestjs/common';
import { AdminModel } from '@src/features/admin/models/admin.model';

export const GetAdmin = createParamDecorator((_, req): AdminModel => {
  return req.user.admin;
});
