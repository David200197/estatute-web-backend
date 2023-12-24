import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
import configuration from './configuration';
import { AboutUsMikroEntity } from '@src/features/about-us/orm-entities/about-us-mikro.entity';
import { AdminMikroEntity } from '@src/features/admin/orm-entities/admin-mikro.entity';
import { AnniversaryMikroEntity } from '@src/features/anniversary/orm-entities/anniversary-mikro.entity';
import { EventMikroEntity } from '@src/features/event/orm-entities/event-mikro.entity';
import { InvitationMikroEntity } from '@src/features/invitation/orm-entities/invitation-mikro.entity';
import { SocialNetworkMikroEntity } from '@src/features/social-network/orm-entities/social-network-mikro.entity';
import { StatuteMikroEntity } from '@src/features/statute/orm-entities/statute-mikro.entity';

const configDB: MikroOrmModuleSyncOptions = {
  entities: [
    AboutUsMikroEntity,
    AdminMikroEntity,
    AnniversaryMikroEntity,
    EventMikroEntity,
    InvitationMikroEntity,
    SocialNetworkMikroEntity,
    StatuteMikroEntity,
  ],
  debug: true,
  dbName: configuration().database.name,
  host: configuration().database.host,
  password: configuration().database.password,
  port: configuration().database.port,
  user: configuration().database.user,
  type: configuration().database.type,
};

export default configDB;
