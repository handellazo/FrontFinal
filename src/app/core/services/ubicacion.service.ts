import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUbicacion } from '../interface/ubicacion';
import { Ubicacion } from '../models/ubicacion.model';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
  URL : string = 'http://localhost:8080/api/';

  constructor(private httpClient:HttpClient) { }

  public getUbicaciones():Observable<IUbicacion[]>{
    return this.httpClient.get<IUbicacion[]>(`${this.URL}UBICACION/listUbicacion`);
  }

  getUbicacionSingle(id: number):Observable<IUbicacion>{
    return this.httpClient.get<IUbicacion>(`${this.URL}UBICACION/buscarUbicacionPorId/${id}`)
  }

  agregarUbicacion(ubicacion:Ubicacion){
    return this.httpClient.post<Ubicacion>(`${this.URL}UBICACION/addUbicacion`, ubicacion)
  }

  eliminarUbicacion(id:number){
    return this.httpClient.delete(`${this.URL}UBICACION/deleteUbicacion/${id}`)
  }

  editarUbicacion(ubicacion:Ubicacion, id:number){
    return this.httpClient.put<Ubicacion>(`${this.URL}UBICACION/updateUbicacion/${id}`, ubicacion)
    }
}
