import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, QueryOrder } from '@mikro-orm/core';
import { FindAllDto, Order } from '@src/common/dto/find-all.dto';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { Paginator } from '@src/common/lib/paginator.lib';
import { InvitationRepositoryModel } from '../models/invitation-repository.model';
import { InvitationMikroEntity } from '../orm-entities/invitation-mikro.entity';
import { InvitationModel, InvitationProps } from '../models/invitation.model';
import { Invitation } from '../entities/invitation';
import { InvitationsModel } from '../models/invitations.model';
import { Invitations } from '../entities/invitations';
import { CreateInvitationDto } from '../dto/create-invitation.dto';
import { UpdateInvitationDto } from '../dto/update-invitation.dto';

@Injectable()
export class InvitationMikroRepository implements InvitationRepositoryModel {
  constructor(
    @InjectRepository(InvitationMikroEntity)
    private readonly invitationRepository: EntityRepository<InvitationMikroEntity>,
  ) {}

  async findOne(
    filter: DeepPartial<InvitationProps>,
  ): Promise<InvitationModel> {
    const invitation = await this.invitationRepository.findOne(filter);
    if (!invitation) return null;
    return Invitation.create(invitation);
  }

  async findAll(
    filter: DeepPartial<InvitationProps>,
    { order, orderBy, page, perPage }: FindAllDto = {},
  ): Promise<ResponseWithPaginate<InvitationsModel>> {
    const pagination = new Paginator({
      page: Number(page),
      perPage: Number(perPage),
    });
    const [invitations, totalElement] =
      await this.invitationRepository.findAndCount(filter, {
        limit: perPage ? pagination.limit : null,
        offset: perPage ? pagination.offset : null,
        orderBy: orderBy
          ? {
              [orderBy]: order === Order.ASC ? QueryOrder.ASC : QueryOrder.DESC,
            }
          : null,
      });
    return {
      entities: Invitations.create(invitations),
      totalElement,
      totalPage: pagination.getTotalPage(totalElement),
    };
  }

  async create(options: CreateInvitationDto): Promise<InvitationModel> {
    const invitation = Invitation.create(options);
    const createdInvitation = this.invitationRepository.create(
      invitation.toObject(),
    );
    await this.invitationRepository.nativeInsert(createdInvitation);
    return invitation;
  }

  async updateOne(
    filter: DeepPartial<InvitationProps>,
    options: UpdateInvitationDto,
  ): Promise<InvitationModel | null> {
    const foundedInvitation = await this.findOne(filter);
    if (!foundedInvitation) return null;

    const updateOptions = this.invitationRepository.create({
      ...filter,
      ...options,
    });
    const countUpdated = await this.invitationRepository.nativeUpdate(
      filter,
      updateOptions,
    );

    if (!countUpdated) return null;
    const invitation = await this.findOne(filter);
    if (!invitation) return null;
    return invitation;
  }

  async removeOne(
    filter: DeepPartial<InvitationProps>,
  ): Promise<InvitationModel> {
    const invitation = await this.findOne(filter);
    if (!invitation) return null;
    const countDeleted = await this.invitationRepository.nativeDelete(filter);
    if (!countDeleted) return null;
    return invitation;
  }

  async updateMany(
    filter: DeepPartial<InvitationProps>,
    options: UpdateInvitationDto,
  ): Promise<boolean> {
    const { entities: invitations } = await this.findAll(filter);
    const result = await invitations.mapParallel((invitation) =>
      this.invitationRepository.nativeUpdate(invitation.toObject(), options),
    );
    return result.every((res) => res.status === 'fulfilled' && res.value);
  }

  async removeMany(filter: DeepPartial<InvitationProps>): Promise<boolean> {
    const { entities: invitations } = await this.findAll(filter);
    const result = await invitations.mapParallel((invitation) =>
      this.invitationRepository.nativeDelete(invitation.toObject()),
    );
    return result.every((res) => res.status === 'fulfilled' && res.value);
  }
}
