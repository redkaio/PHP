import { Router } from '@angular/router';
import { TokenService } from './../../services/auth/token.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(
        private tokenService: TokenService,
        private router: Router,
    ) { }

    ngOnInit(): void {
    }

    logout(){
        this.router.navigate(['login']);
        this.tokenService.logout();
    }
}
