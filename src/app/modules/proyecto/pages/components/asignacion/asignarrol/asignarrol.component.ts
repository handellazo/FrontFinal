import { Component } from '@angular/core';

import { IProyecto } from 'src/app/core/interface/proyecto.interface';
import { ProyectoService } from 'src/app/core/services/proyecto.service';

@Component({
  selector: 'app-asignarrol',
  templateUrl: './asignarrol.component.html',
  styleUrls: ['./asignarrol.component.css']
})
export class AsignarrolComponent {
  proyecto: IProyecto[] = [];

   constructor(private _ProyectoService: ProyectoService ) { }

   public getProyectos(){
    this._ProyectoService.getProyectos().subscribe((res:IProyecto[])=>{
      this.proyecto = res;
    })
  }
  
   ngOnInit() {
     this.getProyectos();
   }

}
