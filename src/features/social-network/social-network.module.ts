import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { SocialNetworkRepositoryProvider } from './providers/social-network-repository.provider';
import { SocialNetworksController } from './social-network.controller';
import { SocialNetworkCron } from './social-network.cron';
import { SocialNetworkListener } from './social-network.listener';
import { FindAllSocialNetworkHandlerProvider } from './handlers/find-all/find-all-social-network-handler.provider';
import { CreateSocialNetworkHandlerProvider } from './handlers/create/create-social-network-handler.provider';
import { FindOneSocialNetworkHandlerProvider } from './handlers/find-one/find-one-social-network-handler.provider';
import { UpdateSocialNetworkHandlerProvider } from './handlers/update/update-social-network-handler.provider';
import { RemoveSocialNetworkHandlerProvider } from './handlers/remove/remove-social-network-handler.provider';
import { SocialNetworkCli } from './social-network.cli';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { SocialNetworkMikroEntity } from './orm-entities/social-network-mikro.entity';

@Module({
  imports: [CqrsModule, MikroOrmModule.forFeature([SocialNetworkMikroEntity])],
  controllers: [SocialNetworksController],
  providers: [
    SocialNetworkRepositoryProvider,
    FindAllSocialNetworkHandlerProvider,
    CreateSocialNetworkHandlerProvider,
    FindOneSocialNetworkHandlerProvider,
    UpdateSocialNetworkHandlerProvider,
    RemoveSocialNetworkHandlerProvider,
    SocialNetworkListener,
    SocialNetworkCron,
    SocialNetworkCli,
  ],
})
export class SocialNetworkModule {}
