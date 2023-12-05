import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateAuthCommand } from './update-auth.command';
import { AuthRepositoryModel } from '../../models/auth-repository.model';
import { UpdateAuthHandlerModel } from './update-auth-handler.model';
import { Inject } from '@nestjs/common';
import { AUTH_REPOSITORY_TOKEN } from '../../providers/auth-repository.provider';
import { AuthModel } from '../../models/auth.model';

@CommandHandler(UpdateAuthCommand)
export class UpdateAuthHandler
  implements UpdateAuthHandlerModel, ICommandHandler<UpdateAuthCommand>
{
  constructor(
    @Inject(AUTH_REPOSITORY_TOKEN)
    private authRepository: AuthRepositoryModel,
  ) {}

  async execute({
    filter,
    updateAuthDto,
  }: UpdateAuthCommand): Promise<AuthModel> {
    return this.authRepository.updateOne(filter, updateAuthDto);
  }
}
