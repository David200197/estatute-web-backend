import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { Command } from 'nestjs-command';
import { CreateAdminCommand } from './handlers/create/create-admin.command';

@Injectable()
export class AdminCli {
  constructor(private readonly commandBus: CommandBus) {}

  @Command({
    command: ['api create:default:admin'],
    describe: 'hello from admin-command',
  })
  async generateDefaultAdmin() {
    await this.commandBus.execute(
      new CreateAdminCommand({ password: '1234', username: 'Admin1234' }),
    );
  }
}
