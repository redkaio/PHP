import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cnpj'
})
export class CnpjPipe implements PipeTransform {

    transform(value: string): unknown {
        while (value.length<14) value = '0'+value;
        return value.replace(/(.{2})(.{3})(.{3})(.{4})(.{2})/, "$1.$2.$3/$4-$5");
    }
}
