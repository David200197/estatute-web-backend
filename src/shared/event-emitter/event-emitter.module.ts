import { Module } from '@nestjs/common';
import { EventEmitterServiceProvider } from './event-emitter-service.provider';

@Module({
  providers: [EventEmitterServiceProvider],
  exports: [EventEmitterServiceProvider],
})
export class EventEmitterModule {}
