import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IConvenio } from 'src/app/core/interface/convenio';
import { IUbicacion } from 'src/app/core/interface/ubicacion';

@Injectable({
  providedIn: 'root'
})

export class Proyectoservice{

 
//   url:string = 'http://localhost:9090/api/'
//   constructor(private http:HttpClient) { }

//   listarTipo(){
// return this.http.get<TipoProyecto[]>(`${this.url}TIPOPY/listTipoPy`) 
//   }

//  listarSemestre(){
//     return this.http.get<SemestreProyecto[]>(`${this.url}SEMESTRE/listSemestre`)
//   }

// listarEp(){
// return this.http.get<EpProyecto[]>(`${this.url}EP/listEp`)
// }

// listarFacultad(){
//   return this.http.get<FacultadProyecto[]>(`${this.url}FACULTAD/listFacultad`)

// }
// listarUbicacion(){
//   return this.http.get<IUbicacion[]>(`${this.url}UBICACION/listUbicacion`)

// }
// listarConvenio(){
//   return this.http.get<IConvenio[]>(`${this.url}CONVENIO/listConvenio`)
// }

// // listarProyectos(){
// //   return this.http.get<Proyectos[]>(`${this.url}PROYECTO/listarConvenio`)


// // }



}

