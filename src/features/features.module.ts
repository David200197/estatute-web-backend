import { Module } from '@nestjs/common';
import { AboutUsModule } from './about-us/about-us.module';
import { AdminModule } from './admin/admin.module';
import { AnniversaryModule } from './anniversary/anniversary.module';
import { AuthModule } from './auth/auth.module';
import { EventModule } from './event/event.module';
import { InvitationModule } from './invitation/invitation.module';
import { SocialNetworksModule } from './social-networks/social-networks.module';
import { StatuteModule } from './statute/statute.module';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [
    AboutUsModule,
    AdminModule,
    AnniversaryModule,
    AuthModule,
    EventModule,
    InvitationModule,
    SocialNetworksModule,
    StatuteModule,
    PhotoModule,
  ],
})
export class FeaturesModule {}
