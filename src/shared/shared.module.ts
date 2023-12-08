import { Module } from '@nestjs/common';
import { HashPasswordModule } from './hash-password/hash-password.module';

@Module({
  imports: [HashPasswordModule],
})
export class SharedModule {}
