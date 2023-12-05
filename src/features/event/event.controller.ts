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
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { SerializerResponse } from '@src/common/lib/response.lib';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Maybe } from '@src/common/lib/maybe.lib';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { EventsModel } from './models/events.model';
import { EventModel } from './models/event.model';
import { FindAllEventQuery } from './handlers/find-all/find-all-event.query';
import { FindOneEventQuery } from './handlers/find-one/find-one-event.query';
import { CreateEventCommand } from './handlers/create/create-event.command';
import { UpdateEventCommand } from './handlers/update/update-event.command';
import { RemoveEventCommand } from './handlers/remove/remove-event.command';

@Controller('event')
export class EventController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  async findAll(@Query() findAllDto: FindAllDto) {
    const {
      entities: events,
      totalElement,
      totalPage,
    }: ResponseWithPaginate<EventsModel> = await this.queryBus.execute(
      new FindAllEventQuery({}, findAllDto),
    );
    return new SerializerResponse('events was founded', {
      events,
      totalElement,
      totalPage,
    });
  }

  @Get('uuid')
  async findOneByUuid(@Param('uuid') uuid: string) {
    const event: Maybe<EventModel> = await this.queryBus.execute(
      new FindOneEventQuery({ uuid }),
    );
    return new SerializerResponse('event was founded', {
      event: event.get(),
    });
  }

  @Post()
  async create(@Body() createEventDto: CreateEventDto) {
    const event: EventModel = await this.commandBus.execute(
      new CreateEventCommand(createEventDto),
    );
    return new SerializerResponse('event was created', {
      event,
    });
  }

  @Patch('uuid')
  async update(
    @Param('uuid') uuid: string,
    @Body() updateEventDto: UpdateEventDto,
  ) {
    const event: EventModel = await this.commandBus.execute(
      new UpdateEventCommand({ uuid }, updateEventDto),
    );
    return new SerializerResponse('event was updated', {
      event,
    });
  }

  @Delete('uuid')
  async remove(@Param('uuid') uuid: string) {
    const event: EventModel = await this.commandBus.execute(
      new RemoveEventCommand({ uuid }),
    );
    return new SerializerResponse('event was removed', {
      event,
    });
  }
}
