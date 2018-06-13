import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupBy'
})
export class GroupByPipe implements PipeTransform {

  transform(value: any, args?: any): {key: string, value: any}[] {
    if (!value) {
      return null;
    }

    const groupedCollection = value.reduce((previous, current) => {
      if (!previous[current[args]]) {
        previous[current[args]] = [current];
      } else {
        previous[current[args]].push(current);
      }

      return previous;
    }, {});

    return Object.keys(groupedCollection).map(key => ({ key, value: groupedCollection[key] }));
  }

}
