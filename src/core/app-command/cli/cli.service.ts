import { Injectable } from '@nestjs/common';
import { CliServiceModal } from './cli-service.model';
import { generateResource } from './generators/generate-resource';
import { generateCommandHandler } from './generators/generate-command-handler';
import { generateQueryHandler } from './generators/generate-query-handler';

@Injectable()
export class CliService implements CliServiceModal {
  async queryHandler(dirname: string): Promise<void> {
    await generateQueryHandler(dirname);
  }
  async commandHandler(dirname: string): Promise<void> {
    await generateCommandHandler(dirname);
  }
  async resource(dirname: string): Promise<void> {
    await generateResource(dirname);
  }
}
