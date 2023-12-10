import { Module } from '@nestjs/common';
import { HashPasswordModule } from './hash-password/hash-password.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [HashPasswordModule, EventEmitterModule],
  exports: [HashPasswordModule, EventEmitterModule],
})
export class SharedModule {}
