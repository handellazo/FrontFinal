import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUbicacion } from 'src/app/core/interface/ubicacion';
import { IConvenio } from 'src/app/core/interface/convenio';
import { IProyecto } from 'src/app/core/interface/proyecto.interface';
import { ITipoPy } from 'src/app/core/interface/tipoPy.interface';
import { ISemestre } from 'src/app/core/interface/semestre.interface';
import { IEp } from 'src/app/core/interface/ep.interface';
import { ICursoSemestre } from 'src/app/core/interface/cursosemestre.interface';
import { Proyecto } from 'src/app/core/models/proyecto.model';
import { DatePipe } from '@angular/common';
import { ProyectoService } from 'src/app/core/services/proyecto.service';
import { TipoPyService } from 'src/app/core/services/tipoPy.service';
import { SemestreService } from 'src/app/core/services/semestre.service';
import { EpService } from 'src/app/core/services/ep.service';
import { CursoSemestreService } from 'src/app/core/services/cursoSemestre.service';
import { UbicacionService } from 'src/app/core/services/ubicacion.service';
import { ConvenioService } from 'src/app/core/services/convenio.service';

@Component({
  selector: 'app-form-proyecto',
  templateUrl: './form-proyecto.component.html',
  styleUrls: ['./form-proyecto.component.css']
})
export class FormProyectoComponent {
  proyecto : IProyecto[] = [];
  tipoPy : ITipoPy[] = [];
  semestre : ISemestre[] = [];
  ep : IEp[] = [];
  cursoSemestre : ICursoSemestre[] = [];
  ubicacion: IUbicacion[] = [];
  convenio : IConvenio[] = [];

  proyectoNuevo : Proyecto = new Proyecto;

  datePipe: DatePipe = new DatePipe('en-US');

  constructor(private _ProyectoService: ProyectoService, 
              private _TipoPyService: TipoPyService,
              private _SemestreService: SemestreService,
              private _EpService: EpService,
              private _CursoSemestreService: CursoSemestreService,
              private _UbicacionService: UbicacionService,
              private _ConvenioService: ConvenioService,
              private _Router: Router) { }

              ngOnInit() {
                   this.getTipoPys();
                   this.getSemestres();
                   this.getEps();
                   this.getCursoSemestres();
                   this.getUbicacion();
                   this.getConvenios();
                 }

  formatearFecha(fecha: string | Date): string {
    if (typeof fecha === 'string') {
      return this.datePipe.transform(fecha, 'dd-MM-yyyy') || '';
    } else if (fecha instanceof Date) {
      return this.datePipe.transform(fecha.toString(), 'dd-MM-yyyy') || '';
    }
    return '';
  }

  //LISTAR TIPO PROYECTO|
  public getTipoPys(){
    this._TipoPyService.getTipoPys().subscribe({
      next:(listaTipoPys:ITipoPy[])=>{
        this.tipoPy = listaTipoPys
      },error:(error:any)=>{
        console.log(error)
      }
    })
  }

  //LISTAR CONVENIO
  public getConvenios(){
    this._ConvenioService.getConvenios().subscribe({
      next:(listaConvenios:IConvenio[])=>{
        this.convenio = listaConvenios
      },error:(error:any)=>{
        console.log(error)
      }
    })
  }

  //LISTAR PROYECTOS
  public getProyectos(){
    this._ProyectoService.getProyectos().subscribe({
      next:(listaProyectos:IProyecto[])=>{
        this.proyecto = listaProyectos
      },error:(error:any)=>{
        console.log(error)
      }
    })
  }


  //LISTAR SEMESTRE
  public getSemestres(){
    this._SemestreService.getSemestres().subscribe({
      next:(listaSemestres:ISemestre[])=>{
        this.semestre = listaSemestres
      },error:(error:any)=>{
        console.log(error)
      }
    })
  }

  //LISTAR EP
  public getEps(){
    this._EpService.getEps().subscribe({
      next:(listaEps:IEp[])=>{
        this.ep = listaEps
      },error:(error:any)=>{
        console.log(error)
      }
    })
  }

  //LISTAR CURSOSEMESTRE
  public getCursoSemestres(){
    this._CursoSemestreService.getCursoSemestres().subscribe({
      next:(listaCursoSemestres:ICursoSemestre[])=>{
        this.cursoSemestre = listaCursoSemestres
      },error:(error:any)=>{
        console.log(error)
      }
    })
  }

  //LISTAR UBICACION
  public getUbicacion(){
    this._UbicacionService.getUbicaciones().subscribe({
      next:(listaUbicaciones:IUbicacion[])=>{
        this.ubicacion = listaUbicaciones
      },error:(error:any)=>{
        console.log(error)
      }
    })
  }

  //Listar TipoProyecto en pestaña
  getIdTipoPy(event: any) {
    // Obtener el valor seleccionado del evento y dividirlo en partes usando ":"
    const partes = event.target.value.split(':');
  
    // Comprobar si hay al menos dos partes
    if (partes.length >= 2) {
      // Convertir la segunda parte a un número entero y asignarla a libroNuevo.id_autor
      const selecIdTipoPy = parseInt(partes[1].trim(), 10);
      this.proyectoNuevo.tipoPY = selecIdTipoPy;
      console.log("Este es el ID: " + selecIdTipoPy);
    } else {
      console.log("Formato de ID de tipoPy no válido");
    }
  }

  //Listar Convenio en pestaña
  getIdConvenio(event: any) {
    // Obtener el valor seleccionado del evento y dividirlo en partes usando ":"
    const partes = event.target.value.split(':');
  
    // Comprobar si hay al menos dos partes
    if (partes.length >= 2) {
      // Convertir la segunda parte a un número entero y asignarla a libroNuevo.id_autor
      const selecIdConvenio = parseInt(partes[1].trim(), 10);
      this.proyectoNuevo.convenio = selecIdConvenio;
      console.log("Este es el ID: " + selecIdConvenio);
    } else {
      console.log("Formato de ID de Convenio no válido");
    }
  }

  //Listar Semestre en pestaña
  getIdSemestre(event: any) {
    // Obtener el valor seleccionado del evento y dividirlo en partes usando ":"
    const partes = event.target.value.split(':');
  
    // Comprobar si hay al menos dos partes
    if (partes.length >= 2) {
      // Convertir la segunda parte a un número entero y asignarla a libroNuevo.id_autor
      const selecIdSemestre = parseInt(partes[1].trim(), 10);
      this.proyectoNuevo.semestre = selecIdSemestre;
      console.log("Este es el ID: " + selecIdSemestre);
    } else {
      console.log("Formato de ID de Semestre no válido");
    }
  }

  //Listar Ep en pestaña
  getIdEp(event: any) {
    // Obtener el valor seleccionado del evento y dividirlo en partes usando ":"
    const partes = event.target.value.split(':');
  
    // Comprobar si hay al menos dos partes
    if (partes.length >= 2) {
      // Convertir la segunda parte a un número entero y asignarla a libroNuevo.id_autor
      const selecIdEp = parseInt(partes[1].trim(), 10);
      this.proyectoNuevo.ep = selecIdEp;
      console.log("Este es el ID: " + selecIdEp);
    } else {
      console.log("Formato de ID de Ep no válido");
    }
  }

  //Listar CursoSemestre en pestaña
  getIdCursoSemestre(event: any) {
    // Obtener el valor seleccionado del evento y dividirlo en partes usando ":"
    const partes = event.target.value.split(':');
  
    // Comprobar si hay al menos dos partes
    if (partes.length >= 2) {
      // Convertir la segunda parte a un número entero y asignarla a libroNuevo.id_autor
      const selecIdCursoSemestre = parseInt(partes[1].trim(), 10);
      this.proyectoNuevo.cursoSemestre = selecIdCursoSemestre;
      console.log("Este es el ID: " + selecIdCursoSemestre);
    } else {
      console.log("Formato de ID de CursoSemestre no válido");
    }
  }

  //Listar TipoProyecto en pestaña
  getIdUbicacion(event: any) {
    // Obtener el valor seleccionado del evento y dividirlo en partes usando ":"
    const partes = event.target.value.split(':');
  
    // Comprobar si hay al menos dos partes
    if (partes.length >= 2) {
      // Convertir la segunda parte a un número entero y asignarla a libroNuevo.id_autor
      const selecIdUbicacion = parseInt(partes[1].trim(), 10);
      this.proyectoNuevo.ubicacion = selecIdUbicacion;
      console.log("Este es el ID: " + selecIdUbicacion);
    } else {
      console.log("Formato de ID de Ubicacion no válido");
    }
  }

  addProyecto(){
    this._ProyectoService.addProyecto(this.proyectoNuevo).subscribe({
      next: (res:Proyecto)=>{
        console.log(res)
        this.proyectoNuevo = new Proyecto();
        this.getProyectos();
        this._Router.navigate(['/home/estado'])
      },error:(error:any)=>{
        console.log("el error es: ", error)
      }
    })
  }

  cancelarProyecto(){
    this._Router.navigate(['/home/estado'])
  }
}
