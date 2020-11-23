import { CepService } from '../../services/cep.service';
import { BranchService } from '../../services/branch.service';
import { Employee } from '../../models/employee.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { switchMap, map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { SelectItem } from 'primeng';


@Component({
    selector: 'app-employee-form',
    templateUrl: './employee-form.component.html',
    styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

    form: FormGroup;
    employee: Employee = new Employee();
    gender: SelectItem[];
    situation: SelectItem[];
    years: String;
    branches: SelectItem[] = [];
    update: boolean = false;

    constructor(
        private activeRoute: ActivatedRoute,
        private employeeService: EmployeeService,
        private formBuilder: FormBuilder,
        private router: Router,
        private branchService: BranchService,
        private cepService: CepService,
    ) {
        this.gender = [{label: 'Selecione o sexo', value: null}, { label: "Masculino", value: "M" }, { label: "Feminino", value: "F" }];
        this.situation = [{ label: "Ativo", value: "A" }, { label: "Inativo", value: "I" }];
        this.years = (new Date().getFullYear() - 100) + ":" + (new Date().getFullYear() - 10);
        branchService.listar().pipe(
            map(
                (branches) => branches.map(
                    (branch) => {
                        let novaBranch: SelectItem = { label: branch.name, value: branch.id };
                        return novaBranch;
                    }
                )
            )
        ).subscribe(
            (result) => {
                this.branches = result;
                this.branches.unshift({label: 'Selecione a filial', value: null},);
            },
            (erro) => {
                console.log(erro);
            }
        );
    }

    ngOnInit(): void {
        this.iniciarForm();
        this.activeRoute.params.subscribe(
            (params) => {
                if (params.id != null) {
                    this.update = true;
                    this.employeeService.obterPorId(params.id).subscribe(
                        (res) => {
                            this.form.patchValue(res.address);
                            this.form.patchValue(res);
                        },
                        () => {
                            if (params.id != null) {
                                this.router.navigate(['funcionarios']);
                            }
                        }
                    );
                }
            }
        );
    }

    salvar() {
        this.employeeService.save(this.form.value).subscribe();
    }

    buscaCep() {
        this.cepService.obterPorCep(this.form.value.cep).pipe(
            map(
                (address) => {
                    return { street: address.logradouro, cep: address.cep.replace("-", ""), district: address.bairro, state: address.uf, city: address.localidade };
                }
            )
        ).subscribe(
            (result) => {
                this.form.patchValue(result);
            }
        );
    }

    iniciarForm() {
        this.form = this.formBuilder.group({
            id: [null],
            name: [null, [Validators.required, Validators.minLength(3)]],
            birth: [null, [Validators.required]],
            gender: [null, [Validators.required]],
            cpf: [null, [Validators.required, Validators.maxLength(11)]],
            number: [null, [Validators.required]],
            street: [null, [Validators.required]],
            district: [null, [Validators.required]],
            city: [null, [Validators.required]],
            state: [null, [Validators.required]],
            cep: [null, [Validators.required]],
            salary: [null, [Validators.required]],
            situation: ['A', [Validators.required]],
            role: [null, [Validators.required]],
            branch_id: [null, [Validators.required]],
        })
    }
}
