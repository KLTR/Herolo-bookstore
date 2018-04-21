import { SpecialPipe } from './special.pipe';
import { PipeTransform, Pipe } from "@angular/core";
@Pipe({
    name: 'title'
})
export class TitlePipe implements PipeTransform {
    //this transform first letter of each string.
    specialPipe: SpecialPipe = new SpecialPipe()

    transform(value:any, words:boolean) {
  //if words = true, this will capitalize first letter of new word.
        if (value) {
          if (words) {
            // return value.replace(/\b\w/g, first => first.toLocaleUpperCase());
            value = value.replace(/\b\w/g, first => first.toLocaleUpperCase());
            return this.specialPipe.transform(value);
            
          } else {
            return value.charAt(0).toUpperCase() + value.slice(1);
          }
        }
    
        return value;
      }
}