import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { UserModel } from '../../models/user.model';

export class UpdateUserCommand {
  constructor(
    public readonly filter: DeepPartial<UserModel>,
    public readonly updateUserDto: UpdateUserDto,
  ) {}
}
