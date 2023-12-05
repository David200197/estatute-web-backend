import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AboutUsRepositoryProvider } from './providers/about-us-repository.provider';
import { AboutUsController } from './about-us.controller';
import { AboutUsCron } from './about-us.cron';
import { AboutUsListener } from './about-us.listener';
import { FindAllAboutUsHandlerProvider } from './handlers/find-all/find-all-about-us-handler.provider';
import { CreateAboutUsHandlerProvider } from './handlers/create/create-about-us-handler.provider';
import { FindOneAboutUsHandlerProvider } from './handlers/find-one/find-one-about-us-handler.provider';
import { UpdateAboutUsHandlerProvider } from './handlers/update/update-about-us-handler.provider';
import { RemoveAboutUsHandlerProvider } from './handlers/remove/remove-about-us-handler.provider';

@Module({
  imports: [CqrsModule],
  controllers: [AboutUsController],
  providers: [
    AboutUsRepositoryProvider,
    FindAllAboutUsHandlerProvider,
    CreateAboutUsHandlerProvider,
    FindOneAboutUsHandlerProvider,
    UpdateAboutUsHandlerProvider,
    RemoveAboutUsHandlerProvider,
    AboutUsListener,
    AboutUsCron,
  ],
})
export class AboutUsModule {}
