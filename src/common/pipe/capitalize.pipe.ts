import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    if (typeof value === 'string')
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}
