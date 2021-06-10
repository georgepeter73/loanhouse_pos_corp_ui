import {NgModule, Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'searchFilter',
  pure: false
})
export class SearchFilterPipe implements PipeTransform {

    transform(items: any[], filter: object): any {
      const searchKey = Object.keys(filter)[0];

      if (!items || !filter) {
        return items;
      }

      return items.filter(item => item[searchKey].toLowerCase().includes(filter[searchKey].toLowerCase()));
  }

}



