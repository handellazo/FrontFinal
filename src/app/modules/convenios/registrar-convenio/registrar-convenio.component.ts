import { Component } from '@angular/core';
import { ConvenioService } from '../../../core/services/convenio.service';
import { IConvenio } from 'src/app/core/interface/convenio';
import { IUbicacion } from 'src/app/core/interface/ubicacion';
import { ITipoConvenio } from 'src/app/core/interface/tipoconvenio';
import { DatePipe } from '@angular/common';
import { UbicacionService } from 'src/app/core/services/ubicacion.service';
import { TipoConvenioService } from 'src/app/core/services/tipoConvenio.service';
import { Convenio } from 'src/app/core/models/convenio.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-convenio',
  templateUrl: './registrar-convenio.component.html',
  styleUrls: ['./registrar-convenio.component.css']
})
export class RegistrarConvenioComponent {
  convenio: IConvenio[] = [];
  ubicacion: IUbicacion[] = [];
  tipoConvenio: ITipoConvenio[] = [];

  convenioNuevo : Convenio = new Convenio();

  datePipe: DatePipe = new DatePipe('en-US');

  constructor(private _ConvenioService: ConvenioService,
              private _UbicacionService: UbicacionService,
              private _TipoConvenioService: TipoConvenioService,
              private _Router: Router) { }

  ngOnInit(): void {
    this.getUbicaciones();
    this.getTipoConvenios();
  }

  formatearFecha(fecha: string | Date): string {
    if (typeof fecha === 'string') {
      return this.datePipe.transform(fecha, 'dd-MM-yyyy') || '';
    } else if (fecha instanceof Date) {
      return this.datePipe.transform(fecha.toString(), 'dd-MM-yyyy') || '';
    }
    return '';
  }

  //Lista los tipos de convenios
  public getTipoConvenios(){
    this._TipoConvenioService.getTipoConvenios().subscribe({
      next:(listaTipoConvenios:ITipoConvenio[])=>{
        this.tipoConvenio = listaTipoConvenios
      },error:(error:any)=>{
        console.log(error)
      }
    })
  }

  //Lista las ubicaciones
  public getUbicaciones(){
    this._UbicacionService.getUbicaciones().subscribe({
      next:(listaUbicacions:IUbicacion[])=>{
        this.ubicacion = listaUbicacions
      },error:(error:any)=>{
        console.log(error)
      }
    })
  }

  //Lista los convenios
  public getConvenios(){
    this._ConvenioService.getConvenios().subscribe({
      next:(listaConvenios:IConvenio[])=>{
        this.convenio = listaConvenios
      },error:(error:any)=>{
        console.log(error)
      }
    })
  }

  //Listar TipoConvenio en pestaña
  getIdTipoConvenio(event: any) {
    // Obtener el valor seleccionado del evento y dividirlo en partes usando ":"
    const partes = event.target.value.split(':');
  
    // Comprobar si hay al menos dos partes
    if (partes.length >= 2) {
      // Convertir la segunda parte a un número entero y asignarla a libroNuevo.id_autor
      const selecIdTipoConvenio = parseInt(partes[1].trim(), 10);
      this.convenioNuevo.tipo = selecIdTipoConvenio;
      console.log("Este es el ID: " + selecIdTipoConvenio);
    } else {
      console.log("Formato de ID de autor no válido");
    }
  }

  //Listar Ubicacion en pestaña
  getIdUbicacion(event: any) {
    // Obtener el valor seleccionado del evento y dividirlo en partes usando ":"
    const partes = event.target.value.split(':');
  
    // Comprobar si hay al menos dos partes
    if (partes.length >= 2) {
      // Convertir la segunda parte a un número entero y asignarla a libroNuevo.id_autor
      const selecIdUbicacion = parseInt(partes[1].trim(), 10);
      this.convenioNuevo.ubicacion = selecIdUbicacion;
      console.log("Este es el ID: " + selecIdUbicacion);
    } else {
      console.log("Formato de ID de autor no válido");
    }
  }

  addConvenio(){
    this._ConvenioService.addConvenio(this.convenioNuevo).subscribe({
      next: (res:Convenio=new Convenio())=>{
        console.log(this.convenioNuevo);
        console.log(res)
        this.convenioNuevo = res;
        this.getConvenios();
        this._Router.navigate(['/home/convenio'])
      },error:(error:any)=>{
        console.log("el error es: ", error)
      }
    })
  }

  cancelarConvenio(){
    this._Router.navigate(['/home/convenio'])
  }

  }

