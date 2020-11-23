import { Branch } from '../models/branch.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

    api: string = `${environment.apiUrl}/branch`;

    constructor(
        private http: HttpClient
    ) { }

    listar(): Observable<Branch[]> {
        return this.http.get<Branch[]>(this.api);
    }

    obterPorId(id: number): Observable<any> {
      return this.http.get(`${this.api}/${id}`);
    }

    save(data: Branch): Observable<any> {
      if (data.id) {
        return this.atualizar(data);
      }
      return this.create(data);
    }

    create(data: Branch): Observable<any> {
      return this.http.post(this.api, data);
    }

    atualizar(data: Branch): Observable<any> {
      return this.http.put(`${this.api}/${data.id}`, data);
    }

    excluir(id: number): Observable<any> {
      return this.http.delete(`${this.api}/${id}`);
    }

}
