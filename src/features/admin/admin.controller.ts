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
import { UpdateAdminDto } from './dto/update-admin.dto';
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

  @Get('uuid')
  async findOneByUuid(@Param('uuid') uuid: string) {
    const eitherResponse: Either<HttpException, AdminModel> =
      await this.queryBus.execute(new FindOneAdminQuery({ uuid }));
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
  async create(@Body() createAdminDto: CreateAdminDto) {
    const admin: AdminModel = await this.commandBus.execute(
      new CreateAdminCommand(createAdminDto),
    );
    return new SerializerResponse('admin was created', {
      admin,
    });
  }

  @Patch('uuid')
  async update(
    @Param('uuid') uuid: string,
    @Body() updateAdminDto: UpdateAdminDto,
  ) {
    const eitherResponse: Either<HttpException, AdminModel> =
      await this.commandBus.execute(
        new UpdateAdminCommand({ uuid }, updateAdminDto),
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

  @Delete('uuid')
  async remove(@Param('uuid') uuid: string) {
    const eitherResponse: Either<HttpException, AdminModel> =
      await this.commandBus.execute(new RemoveAdminCommand({ uuid }));
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
