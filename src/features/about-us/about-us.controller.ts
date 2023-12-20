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
import { CreateAboutUsDto } from './dto/create-about-us.dto';
import { UpdateAboutUsDto } from './dto/update-about-us.dto';
import { SerializerResponse } from '@src/common/lib/response.lib';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Either } from '@src/common/lib/either.lib';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { AllAboutUsModel } from './models/all-about-us.model';
import { AboutUsModel } from './models/about-us.model';
import { FindAllAboutUsQuery } from './handlers/find-all/find-all-about-us.query';
import { FindOneAboutUsQuery } from './handlers/find-one/find-one-about-us.query';
import { CreateAboutUsCommand } from './handlers/create/create-about-us.command';
import { UpdateAboutUsCommand } from './handlers/update/update-about-us.command';
import { RemoveAboutUsCommand } from './handlers/remove/remove-about-us.command';
import { AccessTokenAuth } from '@src/common/decorator/access-token-auth.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('about-us')
export class AboutUsController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  async findAll(@Query() findAllDto: FindAllDto) {
    const {
      entities: aboutUss,
      totalElement,
      totalPage,
    }: ResponseWithPaginate<AllAboutUsModel> = await this.queryBus.execute(
      new FindAllAboutUsQuery({}, findAllDto),
    );
    return new SerializerResponse('aboutUss was founded', {
      aboutUss,
      totalElement,
      totalPage,
    });
  }

  @Get(':uuid')
  async findOneByUuid(@Param('uuid') uuid: string) {
    const eitherResponse: Either<HttpException, AboutUsModel> =
      await this.queryBus.execute(new FindOneAboutUsQuery({ uuid }));
    const aboutUs = eitherResponse.fold(
      (error) => {
        throw error;
      },
      (data) => data,
    );
    return new SerializerResponse('aboutUs was founded', {
      aboutUs,
    });
  }

  @Post()
  @ApiBearerAuth()
  @AccessTokenAuth()
  async create(@Body() createAboutUsDto: CreateAboutUsDto) {
    const aboutUs: AboutUsModel = await this.commandBus.execute(
      new CreateAboutUsCommand(createAboutUsDto),
    );
    return new SerializerResponse('aboutUs was created', {
      aboutUs,
    });
  }

  @Patch(':uuid')
  @ApiBearerAuth()
  @AccessTokenAuth()
  async update(
    @Param('uuid') uuid: string,
    @Body() updateAboutUsDto: UpdateAboutUsDto,
  ) {
    const eitherResponse: Either<HttpException, AboutUsModel> =
      await this.commandBus.execute(
        new UpdateAboutUsCommand({ uuid }, updateAboutUsDto),
      );
    const aboutUs = eitherResponse.fold(
      (error) => {
        throw error;
      },
      (data) => data,
    );
    return new SerializerResponse('aboutUs was updated', {
      aboutUs,
    });
  }

  @Delete(':uuid')
  @ApiBearerAuth()
  @AccessTokenAuth()
  async remove(@Param('uuid') uuid: string) {
    const eitherResponse: Either<HttpException, AboutUsModel> =
      await this.commandBus.execute(new RemoveAboutUsCommand({ uuid }));
    const aboutUs = eitherResponse.fold(
      (error) => {
        throw error;
      },
      (data) => data,
    );
    return new SerializerResponse('aboutUs was removed', {
      aboutUs,
    });
  }
}
