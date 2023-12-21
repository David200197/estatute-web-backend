import { Module } from '@nestjs/common';
import { CliModule } from './cli/cli.module';
import { CommandModule } from 'nestjs-command';

@Module({
  imports: [CommandModule, CliModule],
  providers: [],
  exports: [],
})
export class AppCommandModule {}
