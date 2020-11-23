import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
    selector: 'app-vehicles',
    templateUrl: './vehicles.component.html',
    styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

    listaVehicles: any = [];

    constructor(
        private vehicleService: VehicleService
    ) { }

    ngOnInit(): void {
        this.listarVehicles();
    }

    listarVehicles() {
        this.vehicleService.listar().subscribe(
            result => {
                this.listaVehicles = result;
            }, error => {
                console.error(error);
            }
        )
    }

    excluir(id: number): void {
        this.vehicleService.excluir(id).subscribe();
        this.listarVehicles();
    }

}
