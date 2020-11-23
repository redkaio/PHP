import { CepService } from '../../services/cep.service';
import { BranchService } from '../../services/branch.service';
import { Branch } from '../../models/branch.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng';

@Component({
    selector: 'app-branch-form',
    templateUrl: './branch-form.component.html',
    styleUrls: ['./branch-form.component.css']
})
export class BranchFormComponent implements OnInit {
    branchId: number = null;
    form: FormGroup;
    branch: Branch = new Branch();
    constructor(
        private activeRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private router: Router,
        private branchService: BranchService,
        private cepService: CepService,
    ) {
    }
    ngOnInit(): void {
        this.iniciarForm();
        this.activeRoute.params.subscribe(params => {
            if (params.id != null) {
                this.branchService.obterPorId(params.id).subscribe(res => {
                    this.form.patchValue(res.address);
                    this.form.patchValue(res);
                }, (erro) => {
                    if (params.id != null) {
                        this.router.navigate(['filiais']);
                    }
                })
            }
        });
    }
    salvar() {
        this.branchService.save(this.form.value).subscribe(
            () => {
                this.router.navigate(['filiais']);
            },
            () => {}
        );
    }

    buscaCep() {
        this.cepService.obterPorCep(this.form.value.cep).pipe(
            map((address) => {
                return { street: address.logradouro, cep: address.cep.replace("-", ""), district: address.bairro, state: address.uf, city: address.localidade }
            })
        ).subscribe
            ((result) => {
                this.form.patchValue(result);
            })
    }
    iniciarForm() {
        this.form = this.formBuilder.group({
            id: [null],
            name: [null, [Validators.required, Validators.minLength(3)]],
            ie: [null, [Validators.required]],
            cnpj: [null, [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
            number: [null, [Validators.required]],
            street: [null, [Validators.required]],
            district: [null, [Validators.required]],
            city: [null, [Validators.required]],
            state: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
            cep: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
        })
    }
}
