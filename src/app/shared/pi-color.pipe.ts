import { Pipe, PipeTransform } from '@angular/core';
import tinycolor from 'tinycolor2';

@Pipe({
  name: 'piColor',
})
export class PiColorPipe implements PipeTransform {
  transform(value: string): string {
    return tinycolor(value).toHexString();
  }
}
