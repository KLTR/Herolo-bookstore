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
            
            value = this.specialPipe.transform(value);
            return value.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
            
          } else {
            return value.charAt(0).toUpperCase() + value.slice(1);
          }
        }
    
        return value;
      }
}
