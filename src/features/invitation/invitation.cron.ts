import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class InvitationCron {
  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  example() {
    console.log('Hello from InvitationCron');
  }
}
