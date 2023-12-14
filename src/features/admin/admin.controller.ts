import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateAdminDto } from './dto/create-admin.dto';
import { SerializerResponse } from '@src/common/lib/response.lib';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Either } from '@src/common/lib/either.lib';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { AdminsModel } from './models/admins.model';
import { AdminModel } from './models/admin.model';
import { FindAllAdminQuery } from './handlers/find-all/find-all-admin.query';
import { FindOneAdminQuery } from './handlers/find-one/find-one-admin.query';
import { CreateAdminCommand } from './handlers/create/create-admin.command';
import { UpdateAdminCommand } from './handlers/update/update-admin.command';
import { RemoveAdminCommand } from './handlers/remove/remove-admin.command';
import { AccessTokenAuth } from '@src/common/decorator/access-token-auth.decorator';
import { UpdateApiAdminDto } from './dto/update-crud-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  async findAll(@Query() findAllDto: FindAllDto) {
    const {
      entities: admins,
      totalElement,
      totalPage,
    }: ResponseWithPaginate<AdminsModel> = await this.queryBus.execute(
      new FindAllAdminQuery({}, findAllDto),
    );
    return new SerializerResponse('admins was founded', {
      admins,
      totalElement,
      totalPage,
    });
  }

  @Get(':username')
  async findOneByUsername(@Param('username') username: string) {
    const eitherResponse: Either<HttpException, AdminModel> =
      await this.queryBus.execute(new FindOneAdminQuery({ username }));
    const admin = eitherResponse.fold(
      (error) => {
        throw error;
      },
      (data) => data,
    );
    return new SerializerResponse('admin was founded', {
      admin,
    });
  }

  @Post()
  @AccessTokenAuth()
  async create(@Body() createAdminDto: CreateAdminDto) {
    const eitherResponse: Either<HttpException, AdminModel> =
      await this.commandBus.execute(new CreateAdminCommand(createAdminDto));
    const admin = eitherResponse.fold(
      (error) => {
        throw error;
      },
      (data) => data,
    );
    return new SerializerResponse('admin was created', {
      admin,
    });
  }

  @Patch(':username')
  @AccessTokenAuth()
  async update(
    @Param('username') username: string,
    @Body() updateApiAdminDto: UpdateApiAdminDto,
  ) {
    const eitherResponse: Either<HttpException, AdminModel> =
      await this.commandBus.execute(
        new UpdateAdminCommand({ username }, updateApiAdminDto),
      );
    const admin = eitherResponse.fold(
      (error) => {
        throw error;
      },
      (data) => data,
    );
    return new SerializerResponse('admin was updated', {
      admin,
    });
  }

  @Delete(':username')
  @AccessTokenAuth()
  async remove(@Param('username') username: string) {
    const eitherResponse: Either<HttpException, AdminModel> =
      await this.commandBus.execute(new RemoveAdminCommand({ username }));
    const admin = eitherResponse.fold(
      (error) => {
        throw error;
      },
      (data) => data,
    );
    return new SerializerResponse('admin was removed', {
      admin,
    });
  }
}
