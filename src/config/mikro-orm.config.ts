import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
import configuration from './configuration';
import { AboutUsMikroEntity } from '@src/features/about-us/orm-entities/about-us-mikro.entity';
import { AdminMikroEntity } from '@src/features/admin/orm-entities/admin-mikro.entity';

const configDB: MikroOrmModuleSyncOptions = {
  entities: [AboutUsMikroEntity, AdminMikroEntity],
  debug: true,
  dbName: configuration().database.name,
  host: configuration().database.host,
  password: configuration().database.password,
  port: configuration().database.port,
  user: configuration().database.user,
  type: configuration().database.type,
};

export default configDB;
