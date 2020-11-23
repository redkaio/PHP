import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'vim'
})
export class VimPipe implements PipeTransform {

    transform(value: any, ...args: unknown[]): unknown {
        return value.replace(/(.{1})(.{2})(.{6})(.{1})(.{7})/, "$1 $2 $3 $4 $5");
    }
}
