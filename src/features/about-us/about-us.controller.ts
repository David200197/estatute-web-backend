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
import { CreateAboutUsDto } from './dto/create-about-us.dto';
import { UpdateAboutUsDto } from './dto/update-about-us.dto';
import { SerializerResponse } from '@src/common/lib/response.lib';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Maybe } from '@src/common/lib/maybe.lib';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { AboutUssModel } from './models/about-uss.model';
import { AboutUsModel } from './models/about-us.model';
import { FindAllAboutUsQuery } from './handlers/find-all/find-all-about-us.query';
import { FindOneAboutUsQuery } from './handlers/find-one/find-one-about-us.query';
import { CreateAboutUsCommand } from './handlers/create/create-about-us.command';
import { UpdateAboutUsCommand } from './handlers/update/update-about-us.command';
import { RemoveAboutUsCommand } from './handlers/remove/remove-about-us.command';

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
    }: ResponseWithPaginate<AboutUssModel> = await this.queryBus.execute(
      new FindAllAboutUsQuery({}, findAllDto),
    );
    return new SerializerResponse('aboutUss was founded', {
      aboutUss,
      totalElement,
      totalPage,
    });
  }

  @Get('uuid')
  async findOneByUuid(@Param('uuid') uuid: string) {
    const aboutUs: Maybe<AboutUsModel> = await this.queryBus.execute(
      new FindOneAboutUsQuery({ uuid }),
    );
    return new SerializerResponse('aboutUs was founded', {
      aboutUs: aboutUs.get(),
    });
  }

  @Post()
  async create(@Body() createAboutUsDto: CreateAboutUsDto) {
    const aboutUs: AboutUsModel = await this.commandBus.execute(
      new CreateAboutUsCommand(createAboutUsDto),
    );
    return new SerializerResponse('aboutUs was created', {
      aboutUs,
    });
  }

  @Patch('uuid')
  async update(
    @Param('uuid') uuid: string,
    @Body() updateAboutUsDto: UpdateAboutUsDto,
  ) {
    const aboutUs: AboutUsModel = await this.commandBus.execute(
      new UpdateAboutUsCommand({ uuid }, updateAboutUsDto),
    );
    return new SerializerResponse('aboutUs was updated', {
      aboutUs,
    });
  }

  @Delete('uuid')
  async remove(@Param('uuid') uuid: string) {
    const aboutUs: AboutUsModel = await this.commandBus.execute(
      new RemoveAboutUsCommand({ uuid }),
    );
    return new SerializerResponse('aboutUs was removed', {
      aboutUs,
    });
  }
}
