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
import { CreateStatuteDto } from './dto/create-statute.dto';
import { UpdateStatuteDto } from './dto/update-statute.dto';
import { SerializerResponse } from '@src/common/lib/response.lib';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Either } from '@src/common/lib/either.lib';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { StatutesModel } from './models/statutes.model';
import { StatuteModel } from './models/statute.model';
import { FindAllStatuteQuery } from './handlers/find-all/find-all-statute.query';
import { FindOneStatuteQuery } from './handlers/find-one/find-one-statute.query';
import { CreateStatuteCommand } from './handlers/create/create-statute.command';
import { UpdateStatuteCommand } from './handlers/update/update-statute.command';
import { RemoveStatuteCommand } from './handlers/remove/remove-statute.command';
import { AccessTokenAuth } from '@src/common/decorator/access-token-auth.decorator';

@Controller('statute')
export class StatuteController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  async findAll(@Query() findAllDto: FindAllDto) {
    const {
      entities: statutes,
      totalElement,
      totalPage,
    }: ResponseWithPaginate<StatutesModel> = await this.queryBus.execute(
      new FindAllStatuteQuery({}, findAllDto),
    );
    return new SerializerResponse('statutes was founded', {
      statutes,
      totalElement,
      totalPage,
    });
  }

  @Get(':uuid')
  async findOneByUuid(@Param('uuid') uuid: string) {
    const eitherResponse: Either<HttpException, StatuteModel> =
      await this.queryBus.execute(new FindOneStatuteQuery({ uuid }));
    const statute = eitherResponse.fold(
      (error) => {
        throw error;
      },
      (data) => data,
    );
    return new SerializerResponse('statute was founded', {
      statute,
    });
  }

  @Post()
  @AccessTokenAuth()
  async create(@Body() createStatuteDto: CreateStatuteDto) {
    const statute: StatuteModel = await this.commandBus.execute(
      new CreateStatuteCommand(createStatuteDto),
    );
    return new SerializerResponse('statute was created', {
      statute,
    });
  }

  @Patch(':uuid')
  @AccessTokenAuth()
  async update(
    @Param('uuid') uuid: string,
    @Body() updateStatuteDto: UpdateStatuteDto,
  ) {
    const eitherResponse: Either<HttpException, StatuteModel> =
      await this.commandBus.execute(
        new UpdateStatuteCommand({ uuid }, updateStatuteDto),
      );
    const statute = eitherResponse.fold(
      (error) => {
        throw error;
      },
      (data) => data,
    );
    return new SerializerResponse('statute was updated', {
      statute,
    });
  }

  @Delete(':uuid')
  @AccessTokenAuth()
  async remove(@Param('uuid') uuid: string) {
    const eitherResponse: Either<HttpException, StatuteModel> =
      await this.commandBus.execute(new RemoveStatuteCommand({ uuid }));
    const statute = eitherResponse.fold(
      (error) => {
        throw error;
      },
      (data) => data,
    );
    return new SerializerResponse('statute was removed', {
      statute,
    });
  }
}
