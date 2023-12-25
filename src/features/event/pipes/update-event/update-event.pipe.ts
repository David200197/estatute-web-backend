import { Injectable, PipeTransform } from '@nestjs/common';
import { UpdateEventDto } from '../../dto/update-event.dto';

@Injectable()
export class UpdateEventPipe implements PipeTransform {
  transform(value: UpdateEventDto) {
    const object: Record<string, unknown> = {};
    for (const key in value) {
      if (!value[key]) continue;
      object[key] = value[key];
    }
    return object;
  }
}
