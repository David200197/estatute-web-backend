import { Injectable } from '@nestjs/common';
import { StatuteRepositoryModel } from '../models/statute-repository.model';
import { StatutesModel } from '../models/statutes.model';
import { StatuteModel } from '../models/statute.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateStatuteDto } from '../dto/create-statute.dto';
import { CrudMockMethods } from '@src/common/mocks/crud-mock.methods';
import { Statutes } from '../entities/statutes';
import { UpdateStatuteDto } from '../dto/update-statute.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';

@Injectable()
export class StatuteLocalRepository implements StatuteRepositoryModel {
  private statuteCrud: CrudMockMethods<StatuteModel>;

  constructor() {
    this.statuteCrud = new CrudMockMethods();
  }

  async findOne(
    filter: DeepPartial<StatuteModel>,
  ): Promise<StatuteModel | null> {
    const statute = this.statuteCrud.findOne(filter);
    return Promise.resolve(statute);
  }

  async findAll(
    filter: DeepPartial<StatuteModel>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<StatutesModel>> {
    //using options
    options;
    //code
    const statutes = this.statuteCrud.findAll(filter);
    return Promise.resolve({
      entities: new Statutes(statutes),
      totalElement: 1,
      totalPage: 1,
    });
  }

  async create(options: CreateStatuteDto): Promise<StatuteModel> {
    return this.statuteCrud.create(options);
  }

  async updateOne(
    filter: DeepPartial<StatuteModel>,
    options: UpdateStatuteDto,
  ): Promise<StatuteModel> {
    return this.statuteCrud.update(filter, options);
  }

  async removeOne(filter: DeepPartial<StatuteModel>): Promise<StatuteModel> {
    return this.statuteCrud.delete(filter);
  }

  async updateMany(
    filter: DeepPartial<StatuteModel>,
    options: UpdateStatuteDto,
  ): Promise<StatuteModel> {
    return this.statuteCrud.updateMany(filter, options);
  }

  async removeMany(filter: DeepPartial<StatuteModel>): Promise<StatuteModel> {
    return this.statuteCrud.deleteMany(filter);
  }
}
