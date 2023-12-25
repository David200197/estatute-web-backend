import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, QueryOrder } from '@mikro-orm/core';
import { FindAllDto, Order } from '@src/common/dto/find-all.dto';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { Paginator } from '@src/common/lib/paginator.lib';
import { SocialNetworkRepositoryModel } from '../models/social-network-repository.model';
import { SocialNetworkMikroEntity } from '../orm-entities/social-network-mikro.entity';
import {
  SocialNetworkModel,
  SocialNetworkProps,
} from '../models/social-network.model';
import { SocialNetwork } from '../entities/social-network';
import { SocialNetworksModel } from '../models/social-networks.model';
import { SocialNetworks } from '../entities/social-networks';
import { CreateSocialNetworkDto } from '../dto/create-social-network.dto';
import { UpdateSocialNetworkDto } from '../dto/update-social-network.dto';

@Injectable()
export class SocialNetworkMikroRepository
  implements SocialNetworkRepositoryModel
{
  constructor(
    @InjectRepository(SocialNetworkMikroEntity)
    private readonly socialNetworkRepository: EntityRepository<SocialNetworkMikroEntity>,
  ) {}

  async findOne(
    filter: DeepPartial<SocialNetworkProps>,
  ): Promise<SocialNetworkModel> {
    const socialNetwork = await this.socialNetworkRepository.findOne(filter);
    if (!socialNetwork) return null;
    return SocialNetwork.create(socialNetwork);
  }

  async findAll(
    filter: DeepPartial<SocialNetworkProps>,
    { order, orderBy, page, perPage }: FindAllDto = {},
  ): Promise<ResponseWithPaginate<SocialNetworksModel>> {
    const pagination = new Paginator({
      page: Number(page),
      perPage: Number(perPage),
    });
    const [socialNetworks, totalElement] =
      await this.socialNetworkRepository.findAndCount(filter, {
        limit: perPage ? pagination.limit : null,
        offset: perPage ? pagination.offset : null,
        orderBy: orderBy
          ? {
              [orderBy]: order === Order.ASC ? QueryOrder.ASC : QueryOrder.DESC,
            }
          : null,
      });
    return {
      entities: SocialNetworks.create(socialNetworks),
      totalElement,
      totalPage: pagination.getTotalPage(totalElement),
    };
  }

  async create(options: CreateSocialNetworkDto): Promise<SocialNetworkModel> {
    const socialNetwork = SocialNetwork.create(options);
    const createdSocialNetwork = this.socialNetworkRepository.create(
      socialNetwork.toObject(),
    );
    await this.socialNetworkRepository.nativeInsert(createdSocialNetwork);
    return socialNetwork;
  }

  async updateOne(
    filter: DeepPartial<SocialNetworkProps>,
    options: UpdateSocialNetworkDto,
  ): Promise<SocialNetworkModel | null> {
    const foundedSocialNetwork = await this.findOne(filter);
    if (!foundedSocialNetwork) return null;

    const updateOptions = this.socialNetworkRepository.create({
      ...filter,
      ...options,
    });
    const countUpdated = await this.socialNetworkRepository.nativeUpdate(
      filter,
      updateOptions,
    );

    if (!countUpdated) return null;
    const socialNetwork = await this.findOne(filter);
    if (!socialNetwork) return null;
    return socialNetwork;
  }

  async removeOne(
    filter: DeepPartial<SocialNetworkProps>,
  ): Promise<SocialNetworkModel> {
    const socialNetwork = await this.findOne(filter);
    if (!socialNetwork) return null;
    const countDeleted = await this.socialNetworkRepository.nativeDelete(
      filter,
    );
    if (!countDeleted) return null;
    return socialNetwork;
  }

  async updateMany(
    filter: DeepPartial<SocialNetworkProps>,
    options: UpdateSocialNetworkDto,
  ): Promise<boolean> {
    const { entities: socialNetworks } = await this.findAll(filter);
    const result = await socialNetworks.mapParallel((socialNetwork) =>
      this.socialNetworkRepository.nativeUpdate(
        socialNetwork.toObject(),
        options,
      ),
    );
    return result.every((res) => res.status === 'fulfilled' && res.value);
  }

  async removeMany(filter: DeepPartial<SocialNetworkProps>): Promise<boolean> {
    const { entities: socialNetworks } = await this.findAll(filter);
    const result = await socialNetworks.mapParallel((socialNetwork) =>
      this.socialNetworkRepository.nativeDelete(socialNetwork.toObject()),
    );
    return result.every((res) => res.status === 'fulfilled' && res.value);
  }
}
