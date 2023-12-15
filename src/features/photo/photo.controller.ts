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
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { SerializerResponse } from '@src/common/lib/response.lib';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Either } from '@src/common/lib/either.lib';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { PhotosModel } from './models/photos.model';
import { PhotoModel } from './models/photo.model';
import { FindAllPhotoQuery } from './handlers/find-all/find-all-photo.query';
import { FindOnePhotoQuery } from './handlers/find-one/find-one-photo.query';
import { CreatePhotoCommand } from './handlers/create/create-photo.command';
import { UpdatePhotoCommand } from './handlers/update/update-photo.command';
import { RemovePhotoCommand } from './handlers/remove/remove-photo.command';

@Controller('photo')
export class PhotoController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  async findAll(@Query() findAllDto: FindAllDto) {
    const {
      entities: photos,
      totalElement,
      totalPage,
    }: ResponseWithPaginate<PhotosModel> = await this.queryBus.execute(
      new FindAllPhotoQuery({}, findAllDto),
    );
    return new SerializerResponse('photos was founded', {
      photos,
      totalElement,
      totalPage,
    });
  }

  @Get(':uuid')
  async findOneByUuid(@Param('uuid') uuid: string) {
    const eitherResponse: Either<HttpException, PhotoModel> =
      await this.queryBus.execute(new FindOnePhotoQuery({ uuid }));
    const photo = eitherResponse.fold(
      (error) => {
        throw error;
      },
      (data) => data,
    );
    return new SerializerResponse('photo was founded', {
      photo,
    });
  }

  @Post()
  async create(@Body() createPhotoDto: CreatePhotoDto) {
    const photo: PhotoModel = await this.commandBus.execute(
      new CreatePhotoCommand(createPhotoDto),
    );
    return new SerializerResponse('photo was created', {
      photo,
    });
  }

  @Patch(':uuid')
  async update(
    @Param('uuid') uuid: string,
    @Body() updatePhotoDto: UpdatePhotoDto,
  ) {
    const eitherResponse: Either<HttpException, PhotoModel> =
      await this.commandBus.execute(
        new UpdatePhotoCommand({ uuid }, updatePhotoDto),
      );
    const photo = eitherResponse.fold(
      (error) => {
        throw error;
      },
      (data) => data,
    );
    return new SerializerResponse('photo was updated', {
      photo,
    });
  }

  @Delete(':uuid')
  async remove(@Param('uuid') uuid: string) {
    const eitherResponse: Either<HttpException, PhotoModel> =
      await this.commandBus.execute(new RemovePhotoCommand({ uuid }));
    const photo = eitherResponse.fold(
      (error) => {
        throw error;
      },
      (data) => data,
    );
    return new SerializerResponse('photo was removed', {
      photo,
    });
  }
}
