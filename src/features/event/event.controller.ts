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
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { SerializerResponse } from '@src/common/lib/response.lib';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Either } from '@src/common/lib/either.lib';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { EventsModel } from './models/events.model';
import { EventModel } from './models/event.model';
import { FindAllEventQuery } from './handlers/find-all/find-all-event.query';
import { FindOneEventQuery } from './handlers/find-one/find-one-event.query';
import { CreateEventCommand } from './handlers/create/create-event.command';
import { UpdateEventCommand } from './handlers/update/update-event.command';
import { RemoveEventCommand } from './handlers/remove/remove-event.command';
import { AccessTokenAuth } from '@src/common/decorator/access-token-auth.decorator';
import { FilesInterceptor } from '@nestjs/platform-express';
import { StorePhotoPipe } from './pipes/store-photo/store-photo.pipe';
import { UpdatePhotoPipe } from './pipes/update-photo/update-photo.pipe';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiProperty,
  ApiTags,
} from '@nestjs/swagger';
import { UpdateEventPipe } from './pipes/update-event/update-event.pipe';

@Controller('event')
@ApiTags('event')
export class EventController {
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
    }: ResponseWithPaginate<EventsModel> = await this.queryBus.execute(
      new FindAllEventQuery({}, findAllDto),
    );
    return new SerializerResponse('events was founded', {
      events: entities.toObject(),
      totalElement,
      totalPage,
    });
  }

  @Get(':uuid')
  async findOneByUuid(@Param('uuid') uuid: string) {
    const eitherResponse: Either<HttpException, EventModel> =
      await this.queryBus.execute(new FindOneEventQuery({ uuid }));
    const event = eitherResponse.fold(
      (error) => {
        throw error;
      },
      (data) => data,
    );
    return new SerializerResponse('event was founded', {
      event: event.toObject(),
    });
  }

  @Post()
  @ApiBearerAuth()
  @AccessTokenAuth()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FilesInterceptor('photos'))
  async create(
    @Body() createEventDto: CreateEventDto,
    @UploadedFiles(StorePhotoPipe)
    photos: Array<Express.Multer.File>,
  ) {
    const event: EventModel = await this.commandBus.execute(
      new CreateEventCommand(createEventDto, photos),
    );
    return new SerializerResponse('event was created', {
      event: event.toObject(),
    });
  }

  @Patch(':uuid')
  @ApiBearerAuth()
  @AccessTokenAuth()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FilesInterceptor('photos'))
  async update(
    @Param('uuid') uuid: string,
    @Body(UpdateEventPipe) updateEventDto: UpdateEventDto,
    @UploadedFiles(UpdatePhotoPipe) photos?: Array<Express.Multer.File>,
  ) {
    const eitherResponse: Either<HttpException, EventModel> =
      await this.commandBus.execute(
        new UpdateEventCommand({ uuid }, updateEventDto, photos),
      );
    const event = eitherResponse.fold(
      (error) => {
        throw error;
      },
      (data) => data,
    );
    return new SerializerResponse('event was updated', {
      event: event.toObject(),
    });
  }

  @Delete(':uuid')
  @ApiBearerAuth()
  @AccessTokenAuth()
  async remove(@Param('uuid') uuid: string) {
    const eitherResponse: Either<HttpException, EventModel> =
      await this.commandBus.execute(new RemoveEventCommand({ uuid }));
    const event = eitherResponse.fold(
      (error) => {
        throw error;
      },
      (data) => data,
    );
    return new SerializerResponse('event was removed', {
      event: event.toObject(),
    });
  }
}
