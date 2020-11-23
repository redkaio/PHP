import { Router } from '@angular/router';
import { TokenService } from './token.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptors implements HttpInterceptor {

    constructor(
        private tokenService: TokenService,
        private router: Router,
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authRequest = req;
        const token = this.tokenService.getToken();
        if (token && !(req.url.indexOf('viacep.com.br') >= 0)) {
            authRequest = req.clone({
                headers: req.headers.set('Authorization', 'Bearer' + token)
            })
        }
        return next.handle(authRequest).pipe(tap(
            (event) => {
                // console.log(event)
            },
            (err) => {
                // console.log(err);
                // return of(err);
            }
        ));
    }


}
