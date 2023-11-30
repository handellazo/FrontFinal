import { Component } from '@angular/core';
import { IProyecto } from 'src/app/core/interface/proyecto.interface';
import { ProyectoService } from 'src/app/core/services/proyecto.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-estadolistarpy',
  templateUrl: './estadolistarpy.component.html',
  styleUrls: ['./estadolistarpy.component.css']
})
export class EstadolistarpyComponent  {
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

  deleteProyecto(id:number){
    this._ProyectoService.deleteProyecto(id).subscribe({
      next: (res:any)=>{
        console.log(res);
        this.getProyectos();
        Swal.fire({
          title: "Good job!",
          text: "Se elimino satisfactoriamente!",
          icon: "success"
        });
      },
      error: (error:any)=>{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El convenio esta siendo usado actualmente - No puede ser eliminado",
        });
        console.log(error);
      }
    })
  }  
}
