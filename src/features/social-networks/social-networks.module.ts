import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { SocialNetworksRepositoryProvider } from './providers/social-networks-repository.provider';
import { SocialNetworksController } from './social-networks.controller';
import { SocialNetworksCron } from './social-networks.cron';
import { SocialNetworksListener } from './social-networks.listener';
import { FindAllSocialNetworksHandlerProvider } from './handlers/find-all/find-all-social-networks-handler.provider';
import { CreateSocialNetworksHandlerProvider } from './handlers/create/create-social-networks-handler.provider';
import { FindOneSocialNetworksHandlerProvider } from './handlers/find-one/find-one-social-networks-handler.provider';
import { UpdateSocialNetworksHandlerProvider } from './handlers/update/update-social-networks-handler.provider';
import { RemoveSocialNetworksHandlerProvider } from './handlers/remove/remove-social-networks-handler.provider';
import { SocialNetworksCli } from './social-networks.cli';

@Module({
  imports: [CqrsModule],
  controllers: [SocialNetworksController],
  providers: [
    SocialNetworksRepositoryProvider,
    FindAllSocialNetworksHandlerProvider,
    CreateSocialNetworksHandlerProvider,
    FindOneSocialNetworksHandlerProvider,
    UpdateSocialNetworksHandlerProvider,
    RemoveSocialNetworksHandlerProvider,
    SocialNetworksListener,
    SocialNetworksCron,
    SocialNetworksCli,
  ],
})
export class SocialNetworksModule {}
