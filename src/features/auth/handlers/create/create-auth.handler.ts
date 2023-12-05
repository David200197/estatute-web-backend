import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateAuthCommand } from './create-auth.command';
import { AuthRepositoryModel } from '../../models/auth-repository.model';
import { CreateAuthHandlerModel } from './create-auth-handler.model';
import { Inject } from '@nestjs/common';
import { AUTH_REPOSITORY_TOKEN } from '../../providers/auth-repository.provider';
import { AuthModel } from '../../models/auth.model';

@CommandHandler(CreateAuthCommand)
export class CreateAuthHandler
  implements CreateAuthHandlerModel, ICommandHandler<CreateAuthCommand>
{
  constructor(
    @Inject(AUTH_REPOSITORY_TOKEN)
    private authRepository: AuthRepositoryModel,
  ) {}

  execute({ createAuthDto }: CreateAuthCommand): Promise<AuthModel> {
    return this.authRepository.create(createAuthDto);
  }
}
