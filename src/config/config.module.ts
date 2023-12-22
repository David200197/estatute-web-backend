import { Module } from '@nestjs/common';
import { ConfigModule as ConfigEnvironmentModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { EventEmitterModule } from '@nestjs/event-emitter';
import configuration from './configuration';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import configDB from './mikro-orm.config';

@Module({
  imports: [
    ConfigEnvironmentModule.forRoot({ isGlobal: true, load: [configuration] }),
    ScheduleModule.forRoot(),
    EventEmitterModule.forRoot({ verboseMemoryLeak: true }),
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'public'),
    }),
    MikroOrmModule.forRoot(configDB),
  ],
})
export class ConfigModule {}
