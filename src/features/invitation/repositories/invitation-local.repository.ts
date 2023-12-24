import { Injectable } from '@nestjs/common';
import { InvitationRepositoryModel } from '../models/invitation-repository.model';
import { InvitationsModel } from '../models/invitations.model';
import { InvitationModel, InvitationProps } from '../models/invitation.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateInvitationDto } from '../dto/create-invitation.dto';
import { CrudMockMethods } from '@src/common/mocks/crud-mock.methods';
import { Invitations } from '../entities/invitations';
import { UpdateInvitationDto } from '../dto/update-invitation.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { HelperMockMethods } from '@src/common/interfaces/helper-mock.methods';
import { Invitation } from '../entities/invitation';

@Injectable()
export class InvitationLocalRepository
  implements InvitationRepositoryModel, HelperMockMethods<InvitationModel>
{
  private invitationCrud: CrudMockMethods<InvitationProps>;

  constructor() {
    this.invitationCrud = new CrudMockMethods();
  }

  __changeStore(store: InvitationModel[]): void {
    this.invitationCrud.__changeStore(store.map((data) => data.toObject()));
  }

  __reset(): void {
    this.invitationCrud.__reset();
  }

  __setIsError(value: boolean): void {
    this.invitationCrud.__setIsError(value);
  }

  __getStore(): InvitationModel[] {
    return this.invitationCrud
      .__getStore()
      .map((data) => Invitation.create(data));
  }

  __isError(): boolean {
    return this.invitationCrud.__isError();
  }

  __setFindAllRes(value: any) {
    this.invitationCrud.__setFindAllRes(value);
  }

  __setFindOneRes(value: any) {
    this.invitationCrud.__setFindOneRes(value);
  }

  __setCreateRes(value: any) {
    this.invitationCrud.__setCreateRes(value);
  }

  __setUpdateRes(value: any) {
    this.invitationCrud.__setUpdateRes(value);
  }

  __setUpdateManyRes(value: any) {
    this.invitationCrud.__setUpdateManyRes(value);
  }

  __setDeleteManyRes(value: any) {
    this.invitationCrud.__setDeleteManyRes(value);
  }

  __setDeleteRes(value: any) {
    this.invitationCrud.__setDeleteRes(value);
  }

  async findOne(
    filter: DeepPartial<InvitationProps>,
  ): Promise<InvitationModel | null> {
    const invitation = this.invitationCrud.findOne(filter);
    if (!invitation) return null;
    return Promise.resolve(Invitation.create(invitation));
  }

  async findAll(
    filter: DeepPartial<InvitationProps>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<InvitationsModel>> {
    //using options
    options;
    //code
    const invitations = this.invitationCrud.findAll(filter);
    return Promise.resolve({
      entities: Invitations.create(invitations),
      totalElement: 1,
      totalPage: 1,
    });
  }

  async create(options: CreateInvitationDto): Promise<InvitationModel> {
    const invitation = Invitation.create(options);
    this.invitationCrud.create(invitation.toObject());
    return invitation;
  }

  async updateOne(
    filter: DeepPartial<InvitationProps>,
    options: UpdateInvitationDto,
  ): Promise<InvitationModel> {
    const invitation = this.invitationCrud.update(filter, options);
    if (!invitation) return null;
    return Invitation.create(invitation);
  }

  async removeOne(
    filter: DeepPartial<InvitationProps>,
  ): Promise<InvitationModel> {
    const invitation = this.invitationCrud.delete(filter);
    if (!invitation) return null;
    return Invitation.create(invitation);
  }

  async updateMany(
    filter: DeepPartial<InvitationProps>,
    options: UpdateInvitationDto,
  ): Promise<boolean> {
    return this.invitationCrud.updateMany(filter, options);
  }

  async removeMany(filter: DeepPartial<InvitationProps>): Promise<boolean> {
    return this.invitationCrud.deleteMany(filter);
  }
}
