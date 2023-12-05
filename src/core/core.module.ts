import { Module } from '@nestjs/common';
import { AppCommandModule } from './app-command/app-command.module';

@Module({
  imports: [AppCommandModule],
})
export class CoreModule {}
