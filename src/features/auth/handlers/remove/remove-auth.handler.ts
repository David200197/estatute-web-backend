import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RemoveAuthCommand } from './remove-auth.command';
import { AuthRepositoryModel } from '../../models/auth-repository.model';
import { RemoveAuthHandlerModel } from './remove-auth-handler.model';
import { Inject } from '@nestjs/common';
import { AUTH_REPOSITORY_TOKEN } from '../../providers/auth-repository.provider';
import { AuthModel } from '../../models/auth.model';

@CommandHandler(RemoveAuthCommand)
export class RemoveAuthHandler
  implements RemoveAuthHandlerModel, ICommandHandler<RemoveAuthCommand>
{
  constructor(
    @Inject(AUTH_REPOSITORY_TOKEN)
    private authRepository: AuthRepositoryModel,
  ) {}

  execute({ filter }: RemoveAuthCommand): Promise<AuthModel> {
    return this.authRepository.removeOne(filter);
  }
}
