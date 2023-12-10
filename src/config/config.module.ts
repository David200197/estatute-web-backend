import { Module } from '@nestjs/common';
import { ConfigModule as ConfigEnvironmentModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { EventEmitterModule } from '@nestjs/event-emitter';
import configuration from './configuration';
//import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigEnvironmentModule.forRoot({ isGlobal: true, load: [configuration] }),
    ScheduleModule.forRoot(),
    EventEmitterModule.forRoot({ verboseMemoryLeak: true }),
    //MongooseModule.forRoot(configuration().database.uri),
  ],
})
export class ConfigModule {}
