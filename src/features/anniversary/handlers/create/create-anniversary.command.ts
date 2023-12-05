import { CreateAnniversaryDto } from '../../dto/create-anniversary.dto';

export class CreateAnniversaryCommand {
  constructor(public readonly createAnniversaryDto: CreateAnniversaryDto) {}
}
