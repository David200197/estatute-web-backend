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
import { CreateSocialNetworkDto } from './dto/create-social-network.dto';
import { UpdateSocialNetworkDto } from './dto/update-social-network.dto';
import { SerializerResponse } from '@src/common/lib/response.lib';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Either } from '@src/common/lib/either.lib';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { SocialNetworksModel } from './models/social-networks.model';
import { SocialNetworkModel } from './models/social-network.model';
import { FindAllSocialNetworksQuery } from './handlers/find-all/find-all-social-network.query';
import { FindOneSocialNetworksQuery } from './handlers/find-one/find-one-social-network.query';
import { CreateSocialNetworkCommand } from './handlers/create/create-social-network.command';
import { UpdateSocialNetworkCommand } from './handlers/update/update-social-network.command';
import { RemoveSocialNetworkCommand } from './handlers/remove/remove-social-network.command';
import { AccessTokenAuth } from '@src/common/decorator/access-token-auth.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { TypeSocialNetwork } from './entities/value-object/type-social-network.value-object';

@Controller('social-network')
@ApiTags('social-network')
export class SocialNetworksController {
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
    }: ResponseWithPaginate<SocialNetworksModel> = await this.queryBus.execute(
      new FindAllSocialNetworksQuery({}, findAllDto),
    );
    return new SerializerResponse('socialNetworks was founded', {
      socialNetworks: entities.toObject(),
      totalElement,
      totalPage,
    });
  }

  @Get('all-type-social-networks')
  async getAllTypeSocialNetworks() {
    return new SerializerResponse('typeSocialNetworks was founded', {
      types: TypeSocialNetwork.getAll(),
    });
  }

  @Get(':uuid')
  async findOneByUuid(@Param('uuid') uuid: string) {
    const eitherResponse: Either<HttpException, SocialNetworkModel> =
      await this.queryBus.execute(new FindOneSocialNetworksQuery({ uuid }));
    const socialNetwork = eitherResponse.fold(
      (error) => {
        throw error;
      },
      (data) => data,
    );
    return new SerializerResponse('socialNetwork was founded', {
      socialNetwork: socialNetwork.toObject(),
    });
  }

  @Post()
  @ApiBearerAuth()
  @AccessTokenAuth()
  async create(@Body() createSocialNetworksDto: CreateSocialNetworkDto) {
    const socialNetwork: SocialNetworkModel = await this.commandBus.execute(
      new CreateSocialNetworkCommand(createSocialNetworksDto),
    );
    return new SerializerResponse('socialNetwork was created', {
      socialNetwork: socialNetwork.toObject(),
    });
  }

  @Patch(':uuid')
  @ApiBearerAuth()
  @AccessTokenAuth()
  async update(
    @Param('uuid') uuid: string,
    @Body() updateSocialNetworksDto: UpdateSocialNetworkDto,
  ) {
    const eitherResponse: Either<HttpException, SocialNetworkModel> =
      await this.commandBus.execute(
        new UpdateSocialNetworkCommand({ uuid }, updateSocialNetworksDto),
      );
    const socialNetwork = eitherResponse.fold(
      (error) => {
        throw error;
      },
      (data) => data,
    );
    return new SerializerResponse('socialNetwork was updated', {
      socialNetwork: socialNetwork.toObject(),
    });
  }

  @Delete(':uuid')
  @ApiBearerAuth()
  @AccessTokenAuth()
  async remove(@Param('uuid') uuid: string) {
    const eitherResponse: Either<HttpException, SocialNetworkModel> =
      await this.commandBus.execute(new RemoveSocialNetworkCommand({ uuid }));
    const socialNetwork = eitherResponse.fold(
      (error) => {
        throw error;
      },
      (data) => data,
    );
    return new SerializerResponse('socialNetwork was removed', {
      socialNetwork: socialNetwork.toObject(),
    });
  }
}
