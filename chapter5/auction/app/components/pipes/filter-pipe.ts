import { Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {

    transform(list: any[], parameters: string[]): any {

        const [filterByField, filterValue] = parameters;

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