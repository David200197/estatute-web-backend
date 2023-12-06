import { Injectable } from '@nestjs/common';
import { InvitationRepositoryModel } from '../models/invitation-repository.model';
import { InvitationsModel } from '../models/invitations.model';
import { InvitationModel } from '../models/invitation.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateInvitationDto } from '../dto/create-invitation.dto';
import { CrudMockMethods } from '@src/common/mocks/crud-mock.methods';
import { Invitations } from '../entities/invitations';
import { UpdateInvitationDto } from '../dto/update-invitation.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';

@Injectable()
export class InvitationLocalRepository implements InvitationRepositoryModel {
  private invitationCrud: CrudMockMethods<InvitationModel>;

  constructor() {
    this.invitationCrud = new CrudMockMethods();
  }

  async findOne(
    filter: DeepPartial<InvitationModel>,
  ): Promise<InvitationModel | null> {
    const invitation = this.invitationCrud.findOne(filter);
    return Promise.resolve(invitation);
  }

  async findAll(
    filter: DeepPartial<InvitationModel>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<InvitationsModel>> {
    //using options
    options;
    //code
    const invitations = this.invitationCrud.findAll(filter);
    return Promise.resolve({
      entities: new Invitations(invitations),
      totalElement: 1,
      totalPage: 1,
    });
  }

  async create(options: CreateInvitationDto): Promise<InvitationModel> {
    return this.invitationCrud.create(options);
  }

  async updateOne(
    filter: DeepPartial<InvitationModel>,
    options: UpdateInvitationDto,
  ): Promise<InvitationModel> {
    return this.invitationCrud.update(filter, options);
  }

  async removeOne(
    filter: DeepPartial<InvitationModel>,
  ): Promise<InvitationModel> {
    return this.invitationCrud.delete(filter);
  }

  async updateMany(
    filter: DeepPartial<InvitationModel>,
    options: UpdateInvitationDto,
  ): Promise<InvitationModel> {
    return this.invitationCrud.updateMany(filter, options);
  }

  async removeMany(
    filter: DeepPartial<InvitationModel>,
  ): Promise<InvitationModel> {
    return this.invitationCrud.deleteMany(filter);
  }
}