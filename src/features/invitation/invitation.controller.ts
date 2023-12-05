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
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { UpdateInvitationDto } from './dto/update-invitation.dto';
import { SerializerResponse } from '@src/common/lib/response.lib';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Maybe } from '@src/common/lib/maybe.lib';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { InvitationsModel } from './models/invitations.model';
import { InvitationModel } from './models/invitation.model';
import { FindAllInvitationQuery } from './handlers/find-all/find-all-invitation.query';
import { FindOneInvitationQuery } from './handlers/find-one/find-one-invitation.query';
import { CreateInvitationCommand } from './handlers/create/create-invitation.command';
import { UpdateInvitationCommand } from './handlers/update/update-invitation.command';
import { RemoveInvitationCommand } from './handlers/remove/remove-invitation.command';

@Controller('invitation')
export class InvitationController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  async findAll(@Query() findAllDto: FindAllDto) {
    const {
      entities: invitations,
      totalElement,
      totalPage,
    }: ResponseWithPaginate<InvitationsModel> = await this.queryBus.execute(
      new FindAllInvitationQuery({}, findAllDto),
    );
    return new SerializerResponse('invitations was founded', {
      invitations,
      totalElement,
      totalPage,
    });
  }

  @Get('uuid')
  async findOneByUuid(@Param('uuid') uuid: string) {
    const invitation: Maybe<InvitationModel> = await this.queryBus.execute(
      new FindOneInvitationQuery({ uuid }),
    );
    return new SerializerResponse('invitation was founded', {
      invitation: invitation.get(),
    });
  }

  @Post()
  async create(@Body() createInvitationDto: CreateInvitationDto) {
    const invitation: InvitationModel = await this.commandBus.execute(
      new CreateInvitationCommand(createInvitationDto),
    );
    return new SerializerResponse('invitation was created', {
      invitation,
    });
  }

  @Patch('uuid')
  async update(
    @Param('uuid') uuid: string,
    @Body() updateInvitationDto: UpdateInvitationDto,
  ) {
    const invitation: InvitationModel = await this.commandBus.execute(
      new UpdateInvitationCommand({ uuid }, updateInvitationDto),
    );
    return new SerializerResponse('invitation was updated', {
      invitation,
    });
  }

  @Delete('uuid')
  async remove(@Param('uuid') uuid: string) {
    const invitation: InvitationModel = await this.commandBus.execute(
      new RemoveInvitationCommand({ uuid }),
    );
    return new SerializerResponse('invitation was removed', {
      invitation,
    });
  }
}
