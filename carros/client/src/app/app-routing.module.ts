import { HomeComponent } from './pages/home/home.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginSuccessComponent } from '@nuvem/angular-base';

import { TesteComponent } from './teste/teste.component';
import { EmployeesComponent } from './pages/employee/employees.component';
import { DiarioErrosComponent } from './components/diario-erros/diario-erros.component';
import { EmployeeFormComponent } from './pages/employee-form/employee-form.component';
import { BranchesComponent } from './pages/branches/branches.component';
import { BranchFormComponent } from './pages/branch-form/branch-form.component';
import { VehicleFormComponent } from './pages/vehicle-form/vehicle-form.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';

const routes: Routes = [
    { path: '', redirectTo:'login', pathMatch: 'full' },
    { path: 'login', component: LoginFormComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
    { path: 'funcionarios', component: EmployeesComponent, canActivate: [AuthGuardService] },
    { path: 'filiais', component: BranchesComponent, canActivate: [AuthGuardService] },
    { path: 'veiculos', component: VehiclesComponent, canActivate: [AuthGuardService] },
    { path: 'funcionario/novo', component: EmployeeFormComponent, canActivate: [AuthGuardService] },
    { path: 'funcionario/:id', component: EmployeeFormComponent, canActivate: [AuthGuardService] },
    { path: 'filial/novo', component: BranchFormComponent, canActivate: [AuthGuardService] },
    { path: 'filial/:id', component: BranchFormComponent, canActivate: [AuthGuardService] },
    { path: 'veiculo/novo', component: VehicleFormComponent, canActivate: [AuthGuardService] },
    { path: 'veiculo/:id', component: VehicleFormComponent, canActivate: [AuthGuardService] },
    { path: 'diario-erros', component: DiarioErrosComponent, data: { breadcrumb: 'Diário de Erros'} },
    { path: 'login-success', component: LoginSuccessComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
