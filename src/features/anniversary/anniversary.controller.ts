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
import { CreateAnniversaryDto } from './dto/create-anniversary.dto';
import { UpdateAnniversaryDto } from './dto/update-anniversary.dto';
import { SerializerResponse } from '@src/common/lib/response.lib';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Maybe } from '@src/common/lib/maybe.lib';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { AnniversarysModel } from './models/anniversarys.model';
import { AnniversaryModel } from './models/anniversary.model';
import { FindAllAnniversaryQuery } from './handlers/find-all/find-all-anniversary.query';
import { FindOneAnniversaryQuery } from './handlers/find-one/find-one-anniversary.query';
import { CreateAnniversaryCommand } from './handlers/create/create-anniversary.command';
import { UpdateAnniversaryCommand } from './handlers/update/update-anniversary.command';
import { RemoveAnniversaryCommand } from './handlers/remove/remove-anniversary.command';

@Controller('anniversary')
export class AnniversaryController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  async findAll(@Query() findAllDto: FindAllDto) {
    const {
      entities: anniversarys,
      totalElement,
      totalPage,
    }: ResponseWithPaginate<AnniversarysModel> = await this.queryBus.execute(
      new FindAllAnniversaryQuery({}, findAllDto),
    );
    return new SerializerResponse('anniversarys was founded', {
      anniversarys,
      totalElement,
      totalPage,
    });
  }

  @Get('uuid')
  async findOneByUuid(@Param('uuid') uuid: string) {
    const anniversary: Maybe<AnniversaryModel> = await this.queryBus.execute(
      new FindOneAnniversaryQuery({ uuid }),
    );
    return new SerializerResponse('anniversary was founded', {
      anniversary: anniversary.get(),
    });
  }

  @Post()
  async create(@Body() createAnniversaryDto: CreateAnniversaryDto) {
    const anniversary: AnniversaryModel = await this.commandBus.execute(
      new CreateAnniversaryCommand(createAnniversaryDto),
    );
    return new SerializerResponse('anniversary was created', {
      anniversary,
    });
  }

  @Patch('uuid')
  async update(
    @Param('uuid') uuid: string,
    @Body() updateAnniversaryDto: UpdateAnniversaryDto,
  ) {
    const anniversary: AnniversaryModel = await this.commandBus.execute(
      new UpdateAnniversaryCommand({ uuid }, updateAnniversaryDto),
    );
    return new SerializerResponse('anniversary was updated', {
      anniversary,
    });
  }

  @Delete('uuid')
  async remove(@Param('uuid') uuid: string) {
    const anniversary: AnniversaryModel = await this.commandBus.execute(
      new RemoveAnniversaryCommand({ uuid }),
    );
    return new SerializerResponse('anniversary was removed', {
      anniversary,
    });
  }
}
