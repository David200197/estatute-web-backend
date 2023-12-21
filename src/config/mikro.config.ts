import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
import configuration from './configuration';
import { AboutUsMikroEntity } from '@src/features/about-us/orm/about-us-mikro.entity';

export const configDB: MikroOrmModuleSyncOptions = {
  entities: [AboutUsMikroEntity],
  debug: true,
  dbName: configuration().database.name,
  host: configuration().database.host,
  password: configuration().database.password,
  port: configuration().database.port,
  user: configuration().database.user,
  type: 'postgresql',
};
