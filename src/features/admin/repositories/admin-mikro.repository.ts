import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import {
  CreateRequestContext,
  EntityRepository,
  QueryOrder,
} from '@mikro-orm/core';
import { FindAllDto, Order } from '@src/common/dto/find-all.dto';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { Paginator } from '@src/common/lib/paginator.lib';
import { AdminMikroEntity } from '../orm-entities/admin-mikro.entity';
import { AdminRepositoryModel } from '../models/admin-repository.model';
import { AdminsModel } from '../models/admins.model';
import { AdminModel, AdminProps } from '../models/admin.model';
import { Admin } from '../entities/admin';
import { Admins } from '../entities/admins';
import { CreateAdminDto } from '../dto/create-admin.dto';
import { UpdateAdminDto } from '../dto/update-admin.dto';

@Injectable()
export class AdminMikroRepository implements AdminRepositoryModel {
  constructor(
    @InjectRepository(AdminMikroEntity)
    private readonly adminRepository: EntityRepository<AdminMikroEntity>,
  ) {}

  async findOne(filter: DeepPartial<AdminProps>): Promise<AdminModel> {
    const admin = await this.adminRepository.findOne(filter);
    if (!admin) return null;
    return Admin.create(admin);
  }

  async findAll(
    filter: DeepPartial<AdminProps>,
    { order, orderBy, page, perPage }: FindAllDto = {},
  ): Promise<ResponseWithPaginate<AdminsModel>> {
    const pagination = new Paginator({
      page: Number(page),
      perPage: Number(perPage),
    });
    const [admins, totalElement] = await this.adminRepository.findAndCount(
      filter,
      {
        limit: perPage ? pagination.limit : null,
        offset: perPage ? pagination.offset : null,
        orderBy: orderBy
          ? {
              [orderBy]: order === Order.ASC ? QueryOrder.ASC : QueryOrder.DESC,
            }
          : null,
      },
    );
    return {
      entities: Admins.create(admins),
      totalElement,
      totalPage: pagination.getTotalPage(totalElement),
    };
  }

  async create(options: CreateAdminDto): Promise<AdminModel> {
    const admin = Admin.create(options);
    const createdAdmin = this.adminRepository.create(admin.toObject());
    await this.adminRepository.nativeInsert(createdAdmin);
    return admin;
  }

  async updateOne(
    filter: DeepPartial<AdminProps>,
    options: UpdateAdminDto,
  ): Promise<AdminModel | null> {
    const countUpdated = await this.adminRepository.nativeUpdate(
      filter,
      options,
    );
    if (!countUpdated) return null;
    const admin = await this.findOne(filter);
    if (!admin) return null;
    return admin;
  }

  async removeOne(filter: DeepPartial<AdminProps>): Promise<AdminModel> {
    const admin = await this.findOne(filter);
    if (!admin) return null;
    const countDeleted = await this.adminRepository.nativeDelete(filter);
    if (!countDeleted) return null;
    return admin;
  }

  async updateMany(
    filter: DeepPartial<AdminProps>,
    options: UpdateAdminDto,
  ): Promise<boolean> {
    const { entities: admins } = await this.findAll(filter);
    const result = await admins.mapParallel((admin) =>
      this.adminRepository.nativeUpdate(admin.toObject(), options),
    );
    return result.every((res) => res.status === 'fulfilled' && res.value);
  }

  async removeMany(filter: DeepPartial<AdminProps>): Promise<boolean> {
    const { entities: admins } = await this.findAll(filter);
    const result = await admins.mapParallel((admin) =>
      this.adminRepository.nativeDelete(admin.toObject()),
    );
    return result.every((res) => res.status === 'fulfilled' && res.value);
  }
}
