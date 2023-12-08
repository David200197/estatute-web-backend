import { Module } from '@nestjs/common';
import { HashPasswordHelperProvider } from './hash-password/hash-password-helper.provider';

@Module({
  providers: [HashPasswordHelperProvider],
  exports: [HashPasswordHelperProvider],
})
export class UtilsModule {}
