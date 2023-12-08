import { Module } from '@nestjs/common';
import { EventEmitterHelperProvider } from './event-emitter-helper.provider';

@Module({
  providers: [EventEmitterHelperProvider],
  exports: [EventEmitterHelperProvider],
})
export class EventEmitterModule {}
