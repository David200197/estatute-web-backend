import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateUserCommand } from './update-user.command';
import { UserRepositoryModel } from '../../models/user-repository.model';
import { UpdateUserHandlerModel } from './update-user-handler.model';
import { Inject } from '@nestjs/common';
import { USER_REPOSITORY_TOKEN } from '../../providers/user-repository.provider';
import { UserModel } from '../../models/user.model';

@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler
  implements UpdateUserHandlerModel, ICommandHandler<UpdateUserCommand>
{
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private userRepository: UserRepositoryModel,
  ) {}

  async execute({
    filter,
    updateUserDto,
  }: UpdateUserCommand): Promise<UserModel> {
    return this.userRepository.updateOne(filter, updateUserDto);
  }
}
