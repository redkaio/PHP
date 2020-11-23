import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Vehicle } from '../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  api: string = `${environment.apiUrl}/vehicle`;

  constructor(
    private http: HttpClient    
  ) { }

  listar(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.api);
  }

  obterPorId(id: number): Observable<any> {
    return this.http.get(`${this.api}/${id}`);
  }

  save(data: Vehicle): Observable<any> {
    if (data.id) {
      return this.atualizar(data);
    }
    return this.create(data);
  }

  create(data: Vehicle): Observable<any> {
    return this.http.post(this.api, data);
  }

  atualizar(data: Vehicle): Observable<any> {
    return this.http.put(`${this.api}/${data.id}`, data);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }

}
