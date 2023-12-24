import { Module } from '@nestjs/common';
import { FeaturesModule } from './features/features.module';
import { ConfigModule } from './config/config.module';
import { CoreModule } from './core/core.module';
@Module({
  imports: [ConfigModule, FeaturesModule, CoreModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
