import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
 url = '../../../assets/json/usuario.json'
  constructor(private http: HttpClient) { }
  listarusuario(){
    return this.http.get<any[]>(this.url)
  }
}
