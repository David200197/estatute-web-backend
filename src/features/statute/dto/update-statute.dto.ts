import { PartialType } from '@nestjs/swagger';
import { CreateStatuteDto } from './create-statute.dto';

export class UpdateStatuteDto extends PartialType(CreateStatuteDto) {}
