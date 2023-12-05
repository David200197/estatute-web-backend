import { Command, Positional } from 'nestjs-command';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { CliService } from './cli.service';
import { CLI_SERVICE_TOKEN } from './cli.provider';
import { asyncExec } from '@src/common/utils/async-exec';

@Injectable()
export class CliCommand {
  logger = new Logger(CliCommand.name);

  constructor(
    @Inject(CLI_SERVICE_TOKEN) private readonly cliService: CliService,
  ) {}

  @Command({
    command: ['generate <type> <name>', 'g <type> <name>'],
    describe: 'generate a structures',
  })
  async generate(
    @Positional({
      name: 'type',
      describe: 'the type',
      type: 'string',
    })
    type: string,
    @Positional({
      name: 'name',
      describe: 'the name',
      type: 'string',
    })
    name: string,
  ) {
    try {
      const execute = this.cliService[this.convertType(type)];
      if (!execute) return this.logger.error('type not found');
      await execute(name);
      this.logger.log('execute prettier');
      await asyncExec('npm run format', {
        onSuccess: (message) => this.logger.log(message),
        onError: (error) => this.logger.error(error),
      });
    } catch (error) {
      this.logger.error(error.message);
    }
  }

  private convertType(alia: string) {
    const alias = {
      re: 'resource',
      ch: 'commandHandler',
      'command-handler': 'commandHandler',
      qh: 'queryHandler',
      'query-handler': 'queryHandler',
    };
    return alias[alia] || alia;
  }
}
