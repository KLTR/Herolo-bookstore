import { Pipe, PipeTransform } from '@angular/core';
import { SpecialPipe } from './special.pipe';


@Pipe({
  name: 'normalize'
})
export class NormalizePipe implements PipeTransform {
  specialPipe: SpecialPipe = new SpecialPipe()

  transform(value: any, args?: any): any {
    value = value.toLowerCase();
    return this.specialPipe.transform(value);
  }

}
