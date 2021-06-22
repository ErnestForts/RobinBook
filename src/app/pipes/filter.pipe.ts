import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filter: string): any {
    if (!items || !filter) {
      return items;
  }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => item.Titulo.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }
}
