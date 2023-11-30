import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AsignarrolService } from '../services/asignarrol.service';
import { IProyecto } from 'src/app/core/interface/proyecto.interface';
import { Proyecto } from 'src/app/core/models/proyecto.model';

@Component({
  selector: 'app-asignarrol',
  templateUrl: './asignarrol.component.html',
  styleUrls: ['./asignarrol.component.css']
})
export class AsignarrolComponent {
  proyectoslist: IProyecto[] = [];
  proyecto: Proyecto;

   constructor(private router: Router, private asignarrol: AsignarrolService ) { }

  // listarProyectos(){
  //   this.asignarrol.listarProyectos().subscribe({
  //     next: (resp: IProyecto[]) => {
  //       this.proyectoslist = resp;
  //     },
  //     error: (err: any) => {
  //       console.log(err);
  //     }
  //   });
  
  // }
  
  
  // ngOnInit() {
  //   this.listarProyectos();
   
    
  // }

}
