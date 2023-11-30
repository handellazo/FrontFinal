import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProyecto } from '../interface/proyecto.interface';
import { Proyecto } from '../models/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
   URL : string = 'http://localhost:8080/api/';

   constructor(private httpClient:HttpClient) { }

   public getProyectos():Observable<IProyecto[]>{
     return this.httpClient.get<IProyecto[]>(`${this.URL}PROYECTO/listProyecto`);
   }

   getProyectoSingle(id: number):Observable<IProyecto>{
     return this.httpClient.get<IProyecto>(`${this.URL}PROYECTO/buscarProyectoPorId/${id}`)
   }

   addProyecto(proyecto:Proyecto){
     return this.httpClient.post<Proyecto>(`${this.URL}PROYECTO/addProyecto`, proyecto)
   }

   eliminarProyecto(id:number){
     return this.httpClient.delete(`${this.URL}PROYECTO/deleteProyecto/${id}`)
 }
  editarProyecto(proyecto:Proyecto, id:number){
     return this.httpClient.put<Proyecto>(`${this.URL}PROYECTO/updateProyecto/${id}`, proyecto)
    }
}
