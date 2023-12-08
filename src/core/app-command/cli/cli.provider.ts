import { createProvider } from '@src/common/utils/create-provider';
import { CliServiceModal } from './cli-service.model';
import { CliService } from './cli.service';

export const [CLI_SERVICE_TOKEN, CliServiceProvider] =
  createProvider<CliServiceModal>(CliService);
