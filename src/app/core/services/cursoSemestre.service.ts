import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICursoSemestre } from '../interface/cursosemestre.interface';

@Injectable({
  providedIn: 'root'
})
export class CursoSemestreService {
  URL : string = 'http://localhost:8080/api/';

  constructor(private httpClient:HttpClient) { }

  public getCursoSemestres():Observable<ICursoSemestre[]>{
    return this.httpClient.get<ICursoSemestre[]>(`${this.URL}CURSOSEMESTRE/listCursoSemestre`);
  }

//   getTipoConvenioSingle(id: number):Observable<ITipoConvenio>{
//     return this.httpClient.get<ITipoConvenio>(`${this.URL}TIPOCONVENIO/buscarTipoConvenioPorId/${id}`)
//   }

//   agregarTipoConvenio(tipoConvenio:TipoConvenio){
//     return this.httpClient.post<TipoConvenio>(`${this.URL}TIPOCONVENIO/addTipoConvenio`, tipoConvenio)
//   }

//   eliminarTipoConvenio(id:number){
//     return this.httpClient.delete(`${this.URL}TIPOCONVENIO/deleteTipoConvenio/${id}`)
//   }

//   editarTipoConvenio(tipoConvenio:TipoConvenio, id:number){
//     return this.httpClient.put<TipoConvenio>(`${this.URL}TIPOCONVENIO/updateTipoConvenio/${id}`, tipoConvenio)
//     }
}
