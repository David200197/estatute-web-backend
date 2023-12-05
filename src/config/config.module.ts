import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule as ConfigEnvironmentModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { EventEmitterModule } from '@nestjs/event-emitter';
import configuration from './configuration';

@Module({
  imports: [
    ConfigEnvironmentModule.forRoot({ isGlobal: true, load: [configuration] }),
    MongooseModule.forRoot(configuration().database.uri),
    ScheduleModule.forRoot(),
    EventEmitterModule.forRoot(),
  ],
})
export class ConfigModule {}
