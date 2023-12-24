import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AnniversaryRepositoryProvider } from './providers/anniversary-repository.provider';
import { AnniversaryController } from './anniversary.controller';
import { AnniversaryCron } from './anniversary.cron';
import { AnniversaryListener } from './anniversary.listener';
import { FindAllAnniversaryHandlerProvider } from './handlers/find-all/find-all-anniversary-handler.provider';
import { CreateAnniversaryHandlerProvider } from './handlers/create/create-anniversary-handler.provider';
import { FindOneAnniversaryHandlerProvider } from './handlers/find-one/find-one-anniversary-handler.provider';
import { UpdateAnniversaryHandlerProvider } from './handlers/update/update-anniversary-handler.provider';
import { RemoveAnniversaryHandlerProvider } from './handlers/remove/remove-anniversary-handler.provider';
import { AnniversaryCli } from './anniversary.cli';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AnniversaryMikroEntity } from './orm-entities/anniversary-mikro.entity';

@Module({
  imports: [CqrsModule, MikroOrmModule.forFeature([AnniversaryMikroEntity])],
  controllers: [AnniversaryController],
  providers: [
    AnniversaryRepositoryProvider,
    FindAllAnniversaryHandlerProvider,
    CreateAnniversaryHandlerProvider,
    FindOneAnniversaryHandlerProvider,
    UpdateAnniversaryHandlerProvider,
    RemoveAnniversaryHandlerProvider,
    AnniversaryListener,
    AnniversaryCron,
    AnniversaryCli,
  ],
})
export class AnniversaryModule {}
