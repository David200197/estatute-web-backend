import { InvitationsModel } from './invitations.model';
import { InvitationModel } from './invitation.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateInvitationDto } from '../dto/create-invitation.dto';
import { UpdateInvitationDto } from '../dto/update-invitation.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';

export interface InvitationRepositoryModel {
  findOne(
    filter: DeepPartial<InvitationModel>,
  ): Promise<InvitationModel | null>;
  findAll(
    filter: DeepPartial<InvitationModel>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<InvitationsModel>>;
  create(options: CreateInvitationDto): Promise<InvitationModel>;
  updateOne(
    filter: DeepPartial<InvitationModel>,
    options: UpdateInvitationDto,
  ): Promise<InvitationModel>;
  removeOne(filter: DeepPartial<InvitationModel>): Promise<InvitationModel>;
  updateMany(
    filter: DeepPartial<InvitationModel>,
    options: UpdateInvitationDto,
  ): Promise<InvitationModel>;
  removeMany(filter: DeepPartial<InvitationModel>): Promise<InvitationModel>;
}
