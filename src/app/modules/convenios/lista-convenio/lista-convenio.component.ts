import { Component, OnInit } from '@angular/core';
import { IConvenio } from 'src/app/core/interface/convenio';
import { ConvenioService } from '../services/convenio.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-lista-convenio',
  templateUrl: './lista-convenio.component.html',
  styleUrls: ['./lista-convenio.component.css']
})
export class ListaConvenioComponent implements OnInit {
  convenios: IConvenio[] = [];

  constructor(private convenioService: ConvenioService) { }

  datePipe: DatePipe = new DatePipe('en-US');

  formatearFecha(fecha: string | Date): string {
    if (typeof fecha === 'string') {
      return this.datePipe.transform(fecha, 'dd-MM-yyyy') || '';
    } else if (fecha instanceof Date) {
      return this.datePipe.transform(fecha.toString(), 'dd-MM-yyyy') || '';
    }
    return '';
  }

  ngOnInit(): void {
    this.convenioService.listar().subscribe(data => {
      this.convenios = data;
      console.log(data);
    });
  }

  Eliminar(id: number) {
    this.convenioService.eliminar(id).subscribe(() => {
      // Aquí puedes realizar alguna acción después de eliminar el documento, si es necesario.
      // Por ejemplo, puedes actualizar la lista de documentos.
      this.convenioService.listar().subscribe(data => {
        this.convenios = data;
        console.log(data);
      });
    });
  }
}