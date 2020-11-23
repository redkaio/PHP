import { Router } from '@angular/router';
import { TokenService } from './../../services/auth/token.service';
import { LoginService } from './../../services/auth/login.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

    form = null;

    constructor(
        private formBuilder: FormBuilder,
        private loginService: LoginService,
        private tokenService: TokenService,
        private router: Router
    ) { }

    ngOnInit(): void {
        if (this.tokenService.getToken()) {
            this.router.navigate(['home']);
          }
        this.iniciarForm();
    }

    iniciarForm() {
        this.form = this.formBuilder.group({
            name: [null, [Validators.required]],
            password: [null, [Validators.required]],
        });
    }

    login() {
        this.loginService.login(this.form.value).subscribe(
            (res) => {
                let { access_token, user } = res;
                this.tokenService.saveToken(access_token);
                window.location.reload();
            },
            (err) => {
                console.log(err);
            }
        );
    }

}
