import { Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {

    transform(list: any[], filterByField: string, filterValue: string): any {

        if (!filterByField || !filterValue) {
            return list;
        }

        return list.filter(item => {
            const field = item[filterByField].toLowerCase();
            const filter = filterValue.toLocaleLowerCase();
            return field.indexOf(filter) >= 0;
        });
    }
}