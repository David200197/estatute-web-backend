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
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { SerializerResponse } from '@src/common/lib/response.lib';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Maybe } from '@src/common/lib/maybe.lib';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { AuthsModel } from './models/auths.model';
import { AuthModel } from './models/auth.model';
import { FindAllAuthQuery } from './handlers/find-all/find-all-auth.query';
import { FindOneAuthQuery } from './handlers/find-one/find-one-auth.query';
import { CreateAuthCommand } from './handlers/create/create-auth.command';
import { UpdateAuthCommand } from './handlers/update/update-auth.command';
import { RemoveAuthCommand } from './handlers/remove/remove-auth.command';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  async findAll(@Query() findAllDto: FindAllDto) {
    const {
      entities: auths,
      totalElement,
      totalPage,
    }: ResponseWithPaginate<AuthsModel> = await this.queryBus.execute(
      new FindAllAuthQuery({}, findAllDto),
    );
    return new SerializerResponse('auths was founded', {
      auths,
      totalElement,
      totalPage,
    });
  }

  @Get('uuid')
  async findOneByUuid(@Param('uuid') uuid: string) {
    const auth: Maybe<AuthModel> = await this.queryBus.execute(
      new FindOneAuthQuery({ uuid }),
    );
    return new SerializerResponse('auth was founded', {
      auth: auth.get(),
    });
  }

  @Post()
  async create(@Body() createAuthDto: CreateAuthDto) {
    const auth: AuthModel = await this.commandBus.execute(
      new CreateAuthCommand(createAuthDto),
    );
    return new SerializerResponse('auth was created', {
      auth,
    });
  }

  @Patch('uuid')
  async update(
    @Param('uuid') uuid: string,
    @Body() updateAuthDto: UpdateAuthDto,
  ) {
    const auth: AuthModel = await this.commandBus.execute(
      new UpdateAuthCommand({ uuid }, updateAuthDto),
    );
    return new SerializerResponse('auth was updated', {
      auth,
    });
  }

  @Delete('uuid')
  async remove(@Param('uuid') uuid: string) {
    const auth: AuthModel = await this.commandBus.execute(
      new RemoveAuthCommand({ uuid }),
    );
    return new SerializerResponse('auth was removed', {
      auth,
    });
  }
}
