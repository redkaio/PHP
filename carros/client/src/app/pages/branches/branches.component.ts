import { ButtonModule } from 'primeng/button';
import { Component, OnInit } from '@angular/core';
import { BranchService } from 'src/app/services/branch.service';
@Component({
    selector: 'app-branches',
    templateUrl: './branches.component.html',
    styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {

    listaBranches: any = [];

    constructor(
        private branchService: BranchService
    ) { }

    ngOnInit(): void {
        this.listarBranchs();
    }

    listarBranchs() {
        this.branchService.listar().subscribe(
            result => {
                this.listaBranches = result;
            }, error => {
                console.error(error);
            }
        )
    }

    excluir(id: number): void {
        this.branchService.excluir(id).subscribe(()=>{this.listarBranchs();});

    }

}
