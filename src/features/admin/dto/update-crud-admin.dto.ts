import { PartialType } from '@nestjs/swagger';
import { CreateAdminDto } from './create-admin.dto';

export class UpdateApiAdminDto extends PartialType(CreateAdminDto) {}
