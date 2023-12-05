import { createSymbolProvider } from '@src/common/utils/create-symbol-provider';
import { CliServiceModal } from './cli-service.model';
import { CliService } from './cli.service';

export const [CLI_SERVICE_TOKEN, CliServiceProvider] =
  createSymbolProvider<CliServiceModal>(CliService);
