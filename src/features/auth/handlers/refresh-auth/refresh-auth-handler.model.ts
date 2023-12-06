import { RefreshAuthResponseDto } from '../../dto/refresh-auth-response.dto';
import { RefreshAuthCommand } from './refresh-auth.command';
export interface RefreshAuthHandlerModel {
  execute(
    refreshAuthCommand: RefreshAuthCommand,
  ): Promise<RefreshAuthResponseDto>;
}
