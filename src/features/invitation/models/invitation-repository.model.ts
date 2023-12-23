import { InvitationsModel } from './invitations.model';
import { InvitationModel, InvitationProps } from './invitation.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateInvitationDto } from '../dto/create-invitation.dto';
import { UpdateInvitationDto } from '../dto/update-invitation.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';

export interface InvitationRepositoryModel {
  findOne(
    filter: DeepPartial<InvitationProps>,
  ): Promise<InvitationModel | null>;
  findAll(
    filter: DeepPartial<InvitationProps>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<InvitationsModel>>;
  create(options: CreateInvitationDto): Promise<InvitationModel>;
  updateOne(
    filter: DeepPartial<InvitationProps>,
    options: UpdateInvitationDto,
  ): Promise<InvitationModel>;
  removeOne(filter: DeepPartial<InvitationProps>): Promise<InvitationModel>;
  updateMany(
    filter: DeepPartial<InvitationProps>,
    options: UpdateInvitationDto,
  ): Promise<boolean>;
  removeMany(filter: DeepPartial<InvitationProps>): Promise<boolean>;
}
