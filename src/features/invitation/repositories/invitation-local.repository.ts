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
import { HelperMockMethods } from '@src/common/interfaces/helper-mock.methods';

@Injectable()
export class InvitationLocalRepository
  implements InvitationRepositoryModel, HelperMockMethods<InvitationModel>
{
  private invitationCrud: CrudMockMethods<InvitationModel>;

  constructor() {
    this.invitationCrud = new CrudMockMethods();
  }

  __changeStore(store: InvitationModel[]): void {
    this.invitationCrud.__changeStore(store);
  }

  __reset(): void {
    this.invitationCrud.__reset();
  }

  __setIsError(value: boolean): void {
    this.invitationCrud.__setIsError(value);
  }

  __getStore(): InvitationModel[] {
    return this.invitationCrud.__getStore();
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
      entities: Invitations.instance(invitations),
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
  ): Promise<boolean> {
    return this.invitationCrud.updateMany(filter, options);
  }

  async removeMany(filter: DeepPartial<InvitationModel>): Promise<boolean> {
    return this.invitationCrud.deleteMany(filter);
  }
}
