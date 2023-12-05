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
import { CreateStatuteDto } from './dto/create-statute.dto';
import { UpdateStatuteDto } from './dto/update-statute.dto';
import { SerializerResponse } from '@src/common/lib/response.lib';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Maybe } from '@src/common/lib/maybe.lib';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { StatutesModel } from './models/statutes.model';
import { StatuteModel } from './models/statute.model';
import { FindAllStatuteQuery } from './handlers/find-all/find-all-statute.query';
import { FindOneStatuteQuery } from './handlers/find-one/find-one-statute.query';
import { CreateStatuteCommand } from './handlers/create/create-statute.command';
import { UpdateStatuteCommand } from './handlers/update/update-statute.command';
import { RemoveStatuteCommand } from './handlers/remove/remove-statute.command';

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

  @Get('uuid')
  async findOneByUuid(@Param('uuid') uuid: string) {
    const statute: Maybe<StatuteModel> = await this.queryBus.execute(
      new FindOneStatuteQuery({ uuid }),
    );
    return new SerializerResponse('statute was founded', {
      statute: statute.get(),
    });
  }

  @Post()
  async create(@Body() createStatuteDto: CreateStatuteDto) {
    const statute: StatuteModel = await this.commandBus.execute(
      new CreateStatuteCommand(createStatuteDto),
    );
    return new SerializerResponse('statute was created', {
      statute,
    });
  }

  @Patch('uuid')
  async update(
    @Param('uuid') uuid: string,
    @Body() updateStatuteDto: UpdateStatuteDto,
  ) {
    const statute: StatuteModel = await this.commandBus.execute(
      new UpdateStatuteCommand({ uuid }, updateStatuteDto),
    );
    return new SerializerResponse('statute was updated', {
      statute,
    });
  }

  @Delete('uuid')
  async remove(@Param('uuid') uuid: string) {
    const statute: StatuteModel = await this.commandBus.execute(
      new RemoveStatuteCommand({ uuid }),
    );
    return new SerializerResponse('statute was removed', {
      statute,
    });
  }
}
