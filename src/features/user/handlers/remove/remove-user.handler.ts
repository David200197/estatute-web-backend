import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RemoveUserCommand } from './remove-user.command';
import { UserRepositoryModel } from '../../models/user-repository.model';
import { RemoveUserHandlerModel } from './remove-user-handler.model';
import { Inject } from '@nestjs/common';
import { USER_REPOSITORY_TOKEN } from '../../providers/user-repository.provider';
import { UserModel } from '../../models/user.model';

@CommandHandler(RemoveUserCommand)
export class RemoveUserHandler
  implements RemoveUserHandlerModel, ICommandHandler<RemoveUserCommand>
{
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private userRepository: UserRepositoryModel,
  ) {}

  execute({ filter }: RemoveUserCommand): Promise<UserModel> {
    return this.userRepository.removeOne(filter);
  }
}
