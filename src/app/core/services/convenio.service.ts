import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IConvenio } from '../interface/convenio';
import { Convenio } from '../models/convenio.model';

@Injectable({
  providedIn: 'root'
})
export class ConvenioService {
  URL : string = 'http://localhost:8080/api/';

  constructor(private httpClient:HttpClient) { }

  public getConvenios():Observable<IConvenio[]>{
    return this.httpClient.get<IConvenio[]>(`${this.URL}CONVENIO/listConvenio`);
  }

  getConvenioSingle(id: number):Observable<IConvenio>{
    return this.httpClient.get<IConvenio>(`${this.URL}CONVENIO/buscarConvenioPorId/${id}`)
  }

  agregarConvenio(convenio:Convenio){
    return this.httpClient.post<Convenio>(`${this.URL}CONVENIO/addConvenio`, convenio)
  }

  eliminarConvenio(id:number){
    return this.httpClient.delete(`${this.URL}CONVENIO/deleteConvenio/${id}`)
  }

  editarConvenio(convenio:Convenio, id:number){
    return this.httpClient.put<Convenio>(`${this.URL}CONVENIO/updateConvenio/${id}`, convenio)
    }
}
