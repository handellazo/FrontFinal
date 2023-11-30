import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IConvenio } from 'src/app/core/interface/convenio';


@Injectable({
  providedIn: 'root'
})
export class ConvenioService {
 
  private url : string = 'http://localhost:8080/api/CONVENIO';

  constructor(private http: HttpClient) { }

  listar(): Observable <IConvenio[]>{
    return this.http.get<IConvenio[]>(this.url + '/listConvenio');
  }
  crear(convenio: IConvenio): Observable<any>{
    return this.http.post<string>(this.url +'/addConvenio' , convenio);
  }

  editar(convenio: IConvenio) {
    return this.http.put(this.url, convenio);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/deleteConvenio' + id);
  }

  IDconvenio(id: IConvenio) {
    this.http.get(this.url + '/' + id);
  }
}

