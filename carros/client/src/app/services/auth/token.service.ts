import { Injectable } from '@angular/core';

const tokenKey = 'auth-token'
const userKey = 'auth-user'

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    constructor() { }

    public saveToken(token: string) {
        window.sessionStorage.removeItem(tokenKey);
        window.sessionStorage.setItem(tokenKey, token);
    }

    public getToken() {
        return window.sessionStorage.getItem(tokenKey);
    }

    public saveUser(data) {
        window.sessionStorage.removeItem(userKey);
        window.sessionStorage.setItem(userKey, data);
    }

    public getUser() {
        return window.sessionStorage.getItem(userKey);
    }

    public logout(): void {
        window.sessionStorage.removeItem(tokenKey);
        window.sessionStorage.removeItem(userKey);
      }
}
