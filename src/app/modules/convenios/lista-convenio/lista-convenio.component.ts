import { Component, OnInit } from '@angular/core';
import { IConvenio } from 'src/app/core/interface/convenio';
import { DatePipe } from '@angular/common';
import { ConvenioService } from 'src/app/core/services/convenio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-convenio',
  templateUrl: './lista-convenio.component.html',
  styleUrls: ['./lista-convenio.component.css']
})
export class ListaConvenioComponent implements OnInit {
  convenio: IConvenio[] = [];

   constructor(private _ConvenioService: ConvenioService ) { }
  
   ngOnInit() {
     this.getConvenios();
   }

  datePipe: DatePipe = new DatePipe('en-US');

  formatearFecha(fecha: string | Date): string {
    if (typeof fecha === 'string') {
      return this.datePipe.transform(fecha, 'dd-MM-yyyy') || '';
    } else if (fecha instanceof Date) {
      return this.datePipe.transform(fecha.toString(), 'dd-MM-yyyy') || '';
    }
    return '';
  }

  public getConvenios(){
    this._ConvenioService.getConvenios().subscribe((res:IConvenio[])=>{
      this.convenio = res;
    })
  }

  deleteConvenio(id:number){
    this._ConvenioService.deleteConvenio(id).subscribe({
      next: (res:any)=>{
        console.log(res);
        this.getConvenios();
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