import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsignarrolService {

 
  
  url:string = 'http://localhost:9090/api/'
  constructor(private http:HttpClient) { }
  
}
