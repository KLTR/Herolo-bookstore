import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'special'
})
// This pipe removes special characters
export class SpecialPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.replace(/[^\w\s]/gi, '');
  }

}
