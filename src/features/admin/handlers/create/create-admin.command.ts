import { CreateAdminDto } from '../../dto/create-admin.dto';

export class CreateAdminCommand {
  constructor(public readonly createAdminDto: CreateAdminDto) {}
}
