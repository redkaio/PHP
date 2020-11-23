import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private tokenService: TokenService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // if (this.tokenService.getToken()) {
    //   return true;
    // }

    // this.router.navigate(['login'])
    // return false;
    if (this.tokenService.getToken()) {
        return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
