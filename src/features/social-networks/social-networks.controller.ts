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
import { CreateSocialNetworksDto } from './dto/create-social-networks.dto';
import { UpdateSocialNetworksDto } from './dto/update-social-networks.dto';
import { SerializerResponse } from '@src/common/lib/response.lib';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Maybe } from '@src/common/lib/maybe.lib';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { SocialNetworkssModel } from './models/social-networkss.model';
import { SocialNetworksModel } from './models/social-networks.model';
import { FindAllSocialNetworksQuery } from './handlers/find-all/find-all-social-networks.query';
import { FindOneSocialNetworksQuery } from './handlers/find-one/find-one-social-networks.query';
import { CreateSocialNetworksCommand } from './handlers/create/create-social-networks.command';
import { UpdateSocialNetworksCommand } from './handlers/update/update-social-networks.command';
import { RemoveSocialNetworksCommand } from './handlers/remove/remove-social-networks.command';

@Controller('social-networks')
export class SocialNetworksController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  async findAll(@Query() findAllDto: FindAllDto) {
    const {
      entities: socialNetworkss,
      totalElement,
      totalPage,
    }: ResponseWithPaginate<SocialNetworkssModel> = await this.queryBus.execute(
      new FindAllSocialNetworksQuery({}, findAllDto),
    );
    return new SerializerResponse('socialNetworkss was founded', {
      socialNetworkss,
      totalElement,
      totalPage,
    });
  }

  @Get('uuid')
  async findOneByUuid(@Param('uuid') uuid: string) {
    const socialNetworks: Maybe<SocialNetworksModel> =
      await this.queryBus.execute(new FindOneSocialNetworksQuery({ uuid }));
    return new SerializerResponse('socialNetworks was founded', {
      socialNetworks: socialNetworks.get(),
    });
  }

  @Post()
  async create(@Body() createSocialNetworksDto: CreateSocialNetworksDto) {
    const socialNetworks: SocialNetworksModel = await this.commandBus.execute(
      new CreateSocialNetworksCommand(createSocialNetworksDto),
    );
    return new SerializerResponse('socialNetworks was created', {
      socialNetworks,
    });
  }

  @Patch('uuid')
  async update(
    @Param('uuid') uuid: string,
    @Body() updateSocialNetworksDto: UpdateSocialNetworksDto,
  ) {
    const socialNetworks: SocialNetworksModel = await this.commandBus.execute(
      new UpdateSocialNetworksCommand({ uuid }, updateSocialNetworksDto),
    );
    return new SerializerResponse('socialNetworks was updated', {
      socialNetworks,
    });
  }

  @Delete('uuid')
  async remove(@Param('uuid') uuid: string) {
    const socialNetworks: SocialNetworksModel = await this.commandBus.execute(
      new RemoveSocialNetworksCommand({ uuid }),
    );
    return new SerializerResponse('socialNetworks was removed', {
      socialNetworks,
    });
  }
}
