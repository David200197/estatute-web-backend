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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { GetAdmin } from '@src/common/decorator/get-admin';
import { AdminLoggedConflictException } from './exceptions/admin-logged-conflict.exception';

@Controller('admin')
@ApiTags('admin')
export class AdminController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  @ApiBearerAuth()
  @AccessTokenAuth()
  async findAll(@Query() findAllDto: FindAllDto) {
    const {
      entities,
      totalElement,
      totalPage,
    }: ResponseWithPaginate<AdminsModel> = await this.queryBus.execute(
      new FindAllAdminQuery({}, findAllDto),
    );
    return new SerializerResponse('admins was founded', {
      admins: entities.select({ username: true, uuid: true }),
      totalElement,
      totalPage,
    });
  }

  @Get(':username')
  @ApiBearerAuth()
  @AccessTokenAuth()
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
      admin: admin.select({ username: true, uuid: true }),
    });
  }

  @Post()
  @ApiBearerAuth()
  @AccessTokenAuth()
  async create(@Body() createAdminDto: CreateAdminDto) {
    const eitherResponse: Either<HttpException, AdminModel> =
      await this.commandBus.execute(new CreateAdminCommand(createAdminDto));
    const createdAdmin = eitherResponse.fold(
      (error) => {
        throw error;
      },
      (data) => data,
    );
    return new SerializerResponse('admin was created', {
      admin: createdAdmin.select({ username: true, uuid: true }),
    });
  }

  @Patch(':username')
  @ApiBearerAuth()
  @AccessTokenAuth()
  async update(
    @Param('username') username: string,
    @Body() updateApiAdminDto: UpdateApiAdminDto,
    @GetAdmin() admin: AdminModel,
  ) {
    const isEqual = admin.isSelfEqual({
      username,
    });

    if (isEqual) throw new AdminLoggedConflictException();

    const eitherResponse: Either<HttpException, AdminModel> =
      await this.commandBus.execute(
        new UpdateAdminCommand({ username }, updateApiAdminDto),
      );
    const updatedAdmin = eitherResponse.fold(
      (error) => {
        throw error;
      },
      (data) => data,
    );
    return new SerializerResponse('admin was updated', {
      admin: updatedAdmin.select({ username: true, uuid: true }),
    });
  }

  @Delete(':username')
  @ApiBearerAuth()
  @AccessTokenAuth()
  async remove(
    @Param('username') username: string,
    @GetAdmin() admin: AdminModel,
  ) {
    const isEqual = admin.isSelfEqual({
      username,
    });

    if (isEqual) throw new AdminLoggedConflictException();

    const eitherResponse: Either<HttpException, AdminModel> =
      await this.commandBus.execute(new RemoveAdminCommand({ username }));
    const deletedAdmin = eitherResponse.fold(
      (error) => {
        throw error;
      },
      (data) => data,
    );
    return new SerializerResponse('admin was removed', {
      admin: deletedAdmin.select({ username: true, uuid: true }),
    });
  }
}
