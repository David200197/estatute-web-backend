import { Module } from '@nestjs/common';
import { HashPasswordServiceProvider } from './hash-password-service.provider';

@Module({
  providers: [HashPasswordServiceProvider],
  exports: [HashPasswordServiceProvider],
})
export class HashPasswordModule {}
