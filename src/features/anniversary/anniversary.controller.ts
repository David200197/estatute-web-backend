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
import { CreateAnniversaryDto } from './dto/create-anniversary.dto';
import { UpdateAnniversaryDto } from './dto/update-anniversary.dto';
import { SerializerResponse } from '@src/common/lib/response.lib';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Either } from '@src/common/lib/either.lib';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { AnniversariesModel } from './models/anniversaries.model';
import { AnniversaryModel } from './models/anniversary.model';
import { FindAllAnniversaryQuery } from './handlers/find-all/find-all-anniversary.query';
import { FindOneAnniversaryQuery } from './handlers/find-one/find-one-anniversary.query';
import { CreateAnniversaryCommand } from './handlers/create/create-anniversary.command';
import { UpdateAnniversaryCommand } from './handlers/update/update-anniversary.command';
import { RemoveAnniversaryCommand } from './handlers/remove/remove-anniversary.command';
import { AccessTokenAuth } from '@src/common/decorator/access-token-auth.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('anniversary')
export class AnniversaryController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  async findAll(@Query() findAllDto: FindAllDto) {
    const {
      entities,
      totalElement,
      totalPage,
    }: ResponseWithPaginate<AnniversariesModel> = await this.queryBus.execute(
      new FindAllAnniversaryQuery({}, findAllDto),
    );
    return new SerializerResponse('anniversaries was founded', {
      anniversaries: entities.toObject(),
      totalElement,
      totalPage,
    });
  }

  @Get(':uuid')
  async findOneByUuid(@Param('uuid') uuid: string) {
    const eitherResponse: Either<HttpException, AnniversaryModel> =
      await this.queryBus.execute(new FindOneAnniversaryQuery({ uuid }));
    const anniversary = eitherResponse.fold(
      (error) => {
        throw error;
      },
      (data) => data,
    );
    return new SerializerResponse('anniversary was founded', {
      anniversary: anniversary.toObject(),
    });
  }

  @Post()
  @ApiBearerAuth()
  @AccessTokenAuth()
  async create(@Body() createAnniversaryDto: CreateAnniversaryDto) {
    const anniversary: AnniversaryModel = await this.commandBus.execute(
      new CreateAnniversaryCommand(createAnniversaryDto),
    );
    return new SerializerResponse('anniversary was created', {
      anniversary: anniversary.toObject(),
    });
  }

  @Patch(':uuid')
  @ApiBearerAuth()
  @AccessTokenAuth()
  async update(
    @Param('uuid') uuid: string,
    @Body() updateAnniversaryDto: UpdateAnniversaryDto,
  ) {
    const eitherResponse: Either<HttpException, AnniversaryModel> =
      await this.commandBus.execute(
        new UpdateAnniversaryCommand({ uuid }, updateAnniversaryDto),
      );
    const anniversary = eitherResponse.fold(
      (error) => {
        throw error;
      },
      (data) => data,
    );
    return new SerializerResponse('anniversary was updated', {
      anniversary: anniversary.toObject(),
    });
  }

  @Delete(':uuid')
  @ApiBearerAuth()
  @AccessTokenAuth()
  async remove(@Param('uuid') uuid: string) {
    const eitherResponse: Either<HttpException, AnniversaryModel> =
      await this.commandBus.execute(new RemoveAnniversaryCommand({ uuid }));
    const anniversary = eitherResponse.fold(
      (error) => {
        throw error;
      },
      (data) => data,
    );
    return new SerializerResponse('anniversary was removed', {
      anniversary: anniversary.toObject(),
    });
  }
}
