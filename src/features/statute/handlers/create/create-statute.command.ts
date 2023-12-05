import { CreateStatuteDto } from '../../dto/create-statute.dto';

export class CreateStatuteCommand {
  constructor(public readonly createStatuteDto: CreateStatuteDto) {}
}
