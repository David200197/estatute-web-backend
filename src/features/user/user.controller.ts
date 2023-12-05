import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SerializerResponse } from '@src/common/lib/response.lib';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Maybe } from '@src/common/lib/maybe.lib';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { UsersModel } from './models/users.model';
import { UserModel } from './models/user.model';
import { FindAllUserQuery } from './handlers/find-all/find-all-user.query';
import { FindOneUserQuery } from './handlers/find-one/find-one-user.query';
import { CreateUserCommand } from './handlers/create/create-user.command';
import { UpdateUserCommand } from './handlers/update/update-user.command';
import { RemoveUserCommand } from './handlers/remove/remove-user.command';

@Controller('user')
export class UserController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  async findAll(@Query() findAllDto: FindAllDto) {
    const {
      entities: users,
      totalElement,
      totalPage,
    }: ResponseWithPaginate<UsersModel> = await this.queryBus.execute(
      new FindAllUserQuery({}, findAllDto),
    );
    return new SerializerResponse('users was founded', {
      users,
      totalElement,
      totalPage,
    });
  }

  @Get('uuid')
  async findOneByUuid(@Param('uuid') uuid: string) {
    const user: Maybe<UserModel> = await this.queryBus.execute(
      new FindOneUserQuery({ uuid }),
    );
    return new SerializerResponse('user was founded', {
      user: user.get(),
    });
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const user: UserModel = await this.commandBus.execute(
      new CreateUserCommand(createUserDto),
    );
    return new SerializerResponse('user was created', {
      user,
    });
  }

  @Patch('uuid')
  async update(
    @Param('uuid') uuid: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const user: UserModel = await this.commandBus.execute(
      new UpdateUserCommand({ uuid }, updateUserDto),
    );
    return new SerializerResponse('user was updated', {
      user,
    });
  }

  @Delete('uuid')
  async remove(@Param('uuid') uuid: string) {
    const user: UserModel = await this.commandBus.execute(
      new RemoveUserCommand({ uuid }),
    );
    return new SerializerResponse('user was removed', {
      user,
    });
  }
}
