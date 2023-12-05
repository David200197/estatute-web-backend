import { Injectable } from '@nestjs/common';
import { AuthRepositoryModel } from '../models/auth-repository.model';
import { AuthsModel } from '../models/auths.model';
import { AuthModel } from '../models/auth.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateAuthDto } from '../dto/create-auth.dto';
import { CrudMockMethods } from '@src/common/mocks/crud-mock.methods';
import { Auths } from '../entities/auths';
import { UpdateAuthDto } from '../dto/update-auth.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';

@Injectable()
export class AuthLocalRepository implements AuthRepositoryModel {
  private authCrud: CrudMockMethods<AuthModel>;

  constructor() {
    this.authCrud = new CrudMockMethods();
  }

  async findOne(filter: DeepPartial<AuthModel>): Promise<AuthModel | null> {
    const auth = this.authCrud.findOne(filter);
    return Promise.resolve(auth);
  }

  async findAll(
    filter: DeepPartial<AuthModel>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<AuthsModel>> {
    //using options
    options;
    //code
    const auths = this.authCrud.findAll(filter);
    return Promise.resolve({
      entities: new Auths(auths),
      totalElement: 1,
      totalPage: 1,
    });
  }

  async create(options: CreateAuthDto): Promise<AuthModel> {
    return this.authCrud.create(options);
  }

  async updateOne(
    filter: DeepPartial<AuthModel>,
    options: UpdateAuthDto,
  ): Promise<AuthModel> {
    return this.authCrud.update(filter, options);
  }

  async removeOne(filter: DeepPartial<AuthModel>): Promise<AuthModel> {
    return this.authCrud.delete(filter);
  }

  async updateMany(
    filter: DeepPartial<AuthModel>,
    options: UpdateAuthDto,
  ): Promise<AuthModel> {
    return this.authCrud.updateMany(filter, options);
  }

  async removeMany(filter: DeepPartial<AuthModel>): Promise<AuthModel> {
    return this.authCrud.deleteMany(filter);
  }
}
