import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { Employee } from '../models/employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

    api: string = `${environment.apiUrl}/employee`;

  constructor(
      private http: HttpClient
  ) { }

  listar(): Observable<any> {
      return this.http.get(this.api)
  }

  obterPorId(id: number): Observable<any> {
    return this.http.get(`${this.api}/${id}`);
  }

  save(data: Employee): Observable<any> {
    if (data.id) {
      return this.atualizar(data);
    }
    return this.create(data);
  }

  create(data: Employee): Observable<any> {
    return this.http.post(this.api, data);
  }

  atualizar(data: Employee): Observable<any> {
    return this.http.put(`${this.api}/${data.id}`, data);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }
}
