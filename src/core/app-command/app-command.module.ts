import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { CliModule } from './cli/cli.module';

@Module({
  imports: [CommandModule, CliModule],
  providers: [],
  exports: [],
})
export class AppCommandModule {}
