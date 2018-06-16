import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], args?: string): any {
    if(!value){
      return null;
    }
    if(value[0][args] === undefined){
      throw Error("Property " + args + " not found in value");
    }
    const sortedValues = value.sort((first, second) => {
      if(first[args] > second[args]){
        return 1;
      } else if(first[args] < second[args]){
        return -1;
      } else {
        return 0;
      }
    });

    return sortedValues;
  }

}
