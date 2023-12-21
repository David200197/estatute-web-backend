import { Module } from '@nestjs/common';
import { CliModule } from './cli/cli.module';

@Module({
  imports: [CliModule],
  providers: [],
  exports: [],
})
export class AppCommandModule {}
