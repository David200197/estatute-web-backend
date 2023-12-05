import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from './create-user.command';
import { UserRepositoryModel } from '../../models/user-repository.model';
import { CreateUserHandlerModel } from './create-user-handler.model';
import { Inject } from '@nestjs/common';
import { USER_REPOSITORY_TOKEN } from '../../providers/user-repository.provider';
import { UserModel } from '../../models/user.model';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler
  implements CreateUserHandlerModel, ICommandHandler<CreateUserCommand>
{
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private userRepository: UserRepositoryModel,
  ) {}

  execute({ createUserDto }: CreateUserCommand): Promise<UserModel> {
    return this.userRepository.create(createUserDto);
  }
}
