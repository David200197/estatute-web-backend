import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeaturesModule } from './features/features.module';
import { ConfigModule } from './config/config.module';
import { CoreModule } from './core/core.module';
@Module({
  imports: [ConfigModule, FeaturesModule, CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
