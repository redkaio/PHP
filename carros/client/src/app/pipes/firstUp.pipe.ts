import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'firstUp'
})
export class FirstUp implements PipeTransform {

    transform(value: any, ...args: unknown[]): unknown {
        return  value.charAt(0).toUpperCase() + value.slice(1);
    }
}
