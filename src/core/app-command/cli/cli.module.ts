import { Module } from '@nestjs/common';
import { CliServiceProvider } from './cli.provider';
import { CliCommand } from './cli.command';

@Module({
  providers: [CliServiceProvider, CliCommand],
  exports: [CliServiceProvider, CliCommand],
})
export class CliModule {}
