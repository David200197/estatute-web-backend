import { createParamDecorator } from '@nestjs/common';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { AdminModel } from '@src/features/admin/models/admin.model';

export const GetAdmin = createParamDecorator(
  (_, ctx: ExecutionContextHost): AdminModel => {
    return ctx.switchToHttp().getRequest().admin;
  },
);
