import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cpf'
})
export class CpfPipe implements PipeTransform {

    transform(value: any, ...args: unknown[]): unknown {
        return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }
}
