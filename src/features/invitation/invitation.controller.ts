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
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { UpdateInvitationDto } from './dto/update-invitation.dto';
import { SerializerResponse } from '@src/common/lib/response.lib';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Either } from '@src/common/lib/either.lib';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { InvitationsModel } from './models/invitations.model';
import { InvitationModel } from './models/invitation.model';
import { FindAllInvitationQuery } from './handlers/find-all/find-all-invitation.query';
import { FindOneInvitationQuery } from './handlers/find-one/find-one-invitation.query';
import { CreateInvitationCommand } from './handlers/create/create-invitation.command';
import { UpdateInvitationCommand } from './handlers/update/update-invitation.command';
import { RemoveInvitationCommand } from './handlers/remove/remove-invitation.command';
import { AccessTokenAuth } from '@src/common/decorator/access-token-auth.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('invitation')
export class InvitationController {
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
    }: ResponseWithPaginate<InvitationsModel> = await this.queryBus.execute(
      new FindAllInvitationQuery({}, findAllDto),
    );
    return new SerializerResponse('invitations was founded', {
      invitations: entities.toObject(),
      totalElement,
      totalPage,
    });
  }

  @Get(':uuid')
  async findOneByUuid(@Param('uuid') uuid: string) {
    const eitherResponse: Either<HttpException, InvitationModel> =
      await this.queryBus.execute(new FindOneInvitationQuery({ uuid }));
    const invitation = eitherResponse.fold(
      (error) => {
        throw error;
      },
      (data) => data,
    );
    return new SerializerResponse('invitation was founded', {
      invitation: invitation.toObject(),
    });
  }

  @Post()
  @ApiBearerAuth()
  @AccessTokenAuth()
  async create(@Body() createInvitationDto: CreateInvitationDto) {
    const invitation: InvitationModel = await this.commandBus.execute(
      new CreateInvitationCommand(createInvitationDto),
    );
    return new SerializerResponse('invitation was created', {
      invitation: invitation.toObject(),
    });
  }

  @Patch(':uuid')
  @ApiBearerAuth()
  @AccessTokenAuth()
  async update(
    @Param('uuid') uuid: string,
    @Body() updateInvitationDto: UpdateInvitationDto,
  ) {
    const eitherResponse: Either<HttpException, InvitationModel> =
      await this.commandBus.execute(
        new UpdateInvitationCommand({ uuid }, updateInvitationDto),
      );
    const invitation = eitherResponse.fold(
      (error) => {
        throw error;
      },
      (data) => data,
    );
    return new SerializerResponse('invitation was updated', {
      invitation: invitation.toObject(),
    });
  }

  @Delete(':uuid')
  @ApiBearerAuth()
  @AccessTokenAuth()
  async remove(@Param('uuid') uuid: string) {
    const eitherResponse: Either<HttpException, InvitationModel> =
      await this.commandBus.execute(new RemoveInvitationCommand({ uuid }));
    const invitation = eitherResponse.fold(
      (error) => {
        throw error;
      },
      (data) => data,
    );
    return new SerializerResponse('invitation was removed', {
      invitation: invitation.toObject(),
    });
  }
}
