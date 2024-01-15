import { IsEnum, IsString, IsUUID } from 'class-validator';
import { TypeEventEnum } from '../models/invitation.model';

export class CreateInvitationDto {
  @IsUUID()
  readonly uuid: string;
  @IsString()
  readonly name: string;
  @IsString({ each: true })
  readonly sponsors: string[];
  @IsString()
  readonly location: string;
  @IsEnum(TypeEventEnum)
  readonly type: TypeEventEnum;
}
