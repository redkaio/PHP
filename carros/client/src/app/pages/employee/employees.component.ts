import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

    listaEmployees: any = [];

    constructor(
        private employeeService: EmployeeService
    ) { }

    ngOnInit(): void {
        this.listarEmployees();
    }

    listarEmployees() {
        this.employeeService.listar().subscribe(
            result => {
                this.listaEmployees = result;
            }, error => {
                console.error(error);
            }
        )
    }

    excluir(id: number): void {
        this.employeeService.excluir(id).subscribe();
        this.listarEmployees();
    }

}
