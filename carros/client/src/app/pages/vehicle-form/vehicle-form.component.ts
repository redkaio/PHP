import { Branch } from './../../models/branch.model';
import { BranchService } from '../../services/branch.service';
import { Vehicle } from '../../models/vehicle.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from 'src/app/services/vehicle.service';
import { SelectItem } from 'primeng';

@Component({
    selector: 'app-vehicle-form',
    templateUrl: './vehicle-form.component.html',
    styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
    vehicleId: number = null;
    form: FormGroup;
    vehicle: Vehicle = new Vehicle();
    category: SelectItem[];
    branches: SelectItem[] = [];

    constructor(
        private activeRoute: ActivatedRoute,
        private vehicleService: VehicleService,
        private formBuilder: FormBuilder,
        private router: Router,
        private branchService: BranchService,
    ) {
        this.category = [{label: 'Selecione a categoria', value: null},
            { label: "Entrada", value: "entrada" },
        { label: "Hatch pequeno", value: "hatch pequeno" },
        { label: "Hatch médio", value: "hatch médio" },
        { label: "Sedã médio", value: "sedã médio" },
        { label: "Sedã grande", value: "sedã grande" },
        { label: "SUV", value: "SUV" },
        { label: "Pick - ups", value: "pick - ups" },];
        branchService.listar().pipe(
            map((branches) => branches.map((branch) => {
                let novaBranch: SelectItem = { label: branch.name, value: branch.id };
                return novaBranch;
            }))
        ).subscribe((result) => {
            this.branches = result;
            this.branches.unshift({label: 'Selecione a filial', value: null},);
        }, (erro) => {
            console.log(erro);
        })
    }

    ngOnInit(): void {
        this.iniciarForm();
        this.activeRoute.params.subscribe(params => {
            if (params.id != null) {
                this.vehicleService.obterPorId(params.id).subscribe(res => {
                    this.form.patchValue(res);
                }, (erro) => {
                    if (params.id != null) {
                        this.router.navigate(['veiculos']);
                    }
                })
            }
        });
    }

    salvar() {
        this.vehicleService.save(this.form.value).subscribe(
            () => {
                this.router.navigate(['veiculos']);
            },
            () => { }
        );
    }


    iniciarForm() {
        this.form = this.formBuilder.group({
            id: [null],
            name: [null, [Validators.required, Validators.minLength(3)]],
            model: [null, [Validators.required]],
            color: [null, [Validators.required]],
            year: [null, [Validators.required]],
            vim: [null, [Validators.required, Validators.maxLength(17), Validators.minLength(17)]],
            category: [null, [Validators.required]],
            branch_id: [null, [Validators.required]],
        })
    }
}
