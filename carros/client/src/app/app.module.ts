import { CnpjPipe } from './pipes/cnpj.pipe';
import { VimPipe } from './pipes/vim.pipe';
import { FirstUp } from './pipes/firstUp.pipe';
import { CpfPipe } from './pipes/cpf.pipe';
import { AuthInterceptors } from './services/auth/auth.Interceptors';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppTopbarComponent } from './components/topbar/app.topbar.component';
import { AppFooterComponent } from './components/footer/app.footer.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { environment } from '../environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PageNotificationModule, BreadcrumbModule, MenuModule, ErrorStackModule, httpInterceptorProviders } from '@nuvem/primeng-components';
import { SecurityModule, VersionTagModule } from '@nuvem/angular-base';

import { BlockUIModule } from 'ng-block-ui';

import { CoreModule } from './core/core.module';
import { ConfirmationService, MessageService } from 'primeng/api';

import { DiarioErrosComponent } from './components/diario-erros/diario-erros.component';
import { PaginaInicialComponent } from './view/pagina-inicial/pagina-inicial.component';
import { TesteComponent } from './teste/teste.component';
import { EmployeesComponent } from './pages/employee/employees.component';
import { EmployeeFormComponent } from './pages/employee-form/employee-form.component';
import { BranchFormComponent } from './pages/branch-form/branch-form.component';
import { VehicleFormComponent } from './pages/vehicle-form/vehicle-form.component';
import { BranchesComponent } from './pages/branches/branches.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { HomeComponent } from './pages/home/home.component';
@NgModule({
    declarations: [
        AppComponent,
        AppTopbarComponent,
        AppFooterComponent,
        DiarioErrosComponent,
        PaginaInicialComponent,
        TesteComponent,
        EmployeesComponent,
        EmployeeFormComponent,
        BranchesComponent,
        BranchFormComponent,
        VehicleFormComponent,
        VehiclesComponent,
        LoginFormComponent,
        HomeComponent,
        CpfPipe,
        FirstUp,
        VimPipe,
        CnpjPipe,
    ],
    imports: [
        BlockUIModule.forRoot({
            message: "Carregando..."
        }),
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
        PageNotificationModule,
        BreadcrumbModule,
        ErrorStackModule,
        VersionTagModule,
        SecurityModule.forRoot(environment.auth),
        MenuModule,
        CoreModule
    ],
    providers: [
        ConfirmationService,
        MessageService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptors, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
