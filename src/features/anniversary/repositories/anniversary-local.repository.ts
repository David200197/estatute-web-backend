import { Injectable } from '@nestjs/common';
import { AnniversaryRepositoryModel } from '../models/anniversary-repository.model';
import { AnniversarysModel } from '../models/anniversarys.model';
import { AnniversaryModel } from '../models/anniversary.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateAnniversaryDto } from '../dto/create-anniversary.dto';
import { CrudMockMethods } from '@src/common/mocks/crud-mock.methods';
import { Anniversarys } from '../entities/anniversarys';
import { UpdateAnniversaryDto } from '../dto/update-anniversary.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';

@Injectable()
export class AnniversaryLocalRepository implements AnniversaryRepositoryModel {
  private anniversaryCrud: CrudMockMethods<AnniversaryModel>;

  constructor() {
    this.anniversaryCrud = new CrudMockMethods();
  }

  async findOne(
    filter: DeepPartial<AnniversaryModel>,
  ): Promise<AnniversaryModel | null> {
    const anniversary = this.anniversaryCrud.findOne(filter);
    return Promise.resolve(anniversary);
  }

  async findAll(
    filter: DeepPartial<AnniversaryModel>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<AnniversarysModel>> {
    //using options
    options;
    //code
    const anniversarys = this.anniversaryCrud.findAll(filter);
    return Promise.resolve({
      entities: new Anniversarys(anniversarys),
      totalElement: 1,
      totalPage: 1,
    });
  }

  async create(options: CreateAnniversaryDto): Promise<AnniversaryModel> {
    return this.anniversaryCrud.create(options);
  }

  async updateOne(
    filter: DeepPartial<AnniversaryModel>,
    options: UpdateAnniversaryDto,
  ): Promise<AnniversaryModel> {
    return this.anniversaryCrud.update(filter, options);
  }

  async removeOne(
    filter: DeepPartial<AnniversaryModel>,
  ): Promise<AnniversaryModel> {
    return this.anniversaryCrud.delete(filter);
  }

  async updateMany(
    filter: DeepPartial<AnniversaryModel>,
    options: UpdateAnniversaryDto,
  ): Promise<AnniversaryModel> {
    return this.anniversaryCrud.updateMany(filter, options);
  }

  async removeMany(
    filter: DeepPartial<AnniversaryModel>,
  ): Promise<AnniversaryModel> {
    return this.anniversaryCrud.deleteMany(filter);
  }
}
