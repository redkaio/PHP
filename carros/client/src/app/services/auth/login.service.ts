import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Login } from './../../models/login.model ';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    api = `${environment.apiUrl}/login`;

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(
        private http: HttpClient
    ) { }

    public login(credenciais: Login): Observable<any>{
        return this.http.post(this.api, credenciais, this.httpOptions);

    }
}
