import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstadoproyectoService } from '../services/estadoproyecto.service';


@Component({
  selector: 'app-estadolistarpy',
  templateUrl: './estadolistarpy.component.html',
  styleUrls: ['./estadolistarpy.component.css']
})
export class EstadolistarpyComponent  {
  // proyectoslist: Proyectos[] = [];
  // proyecto: Proyectos;
  // selectedSemestre: any;
  // selectedFacultad: any;
  // selectedEp: any;

   constructor(private router: Router, private estadoproyectoService: EstadoproyectoService) { }

//   listarProyectos(){
//     this.estadoproyectoService.listarProyectos().subscribe({
//       next: (resp: Proyectos[]) => {
//         this.proyectoslist = resp;
//       },
//       error: (err: any) => {
//         console.log(err);
//       }
//     });
  
//   }
  

//   ngOnInit() {
//     this.listarProyectos();
//     this.listarSemestre();
//   this.listarFacultad();
//     this.listarEp();
  
//   }

//   //Eliminar Proyecto
//   deleteItem(item: any){
  
//   }

//   //Editar Proyecto
//   editItem(item: any){
  
//   }

// // Buscar Proyecto
//   buscar(){
//     const selectedSemestre = this.selectedSemestre;
//     const selectedFacultad = this.selectedFacultad;
//     const selectedEp = this.selectedEp;
  
//     this.estadoproyectoService.buscarProyectos(selectedSemestre, selectedFacultad, selectedEp).subscribe({
//       next: (resp: any) => {
//         // Manejar los datos devueltos
//       },
//       error: (err: any) => { console.error(err) }
//     });
//   }


//   // Semestre
//   semestrelist: SemestreProyecto[] = [];
//   // EP
//   eplist: EpProyecto[] = [];
//   // FACULTAD
//   facultadlist: FacultadProyecto[] = [];
  
//   // SEMESTRE
//   listarSemestre() {
//     this.estadoproyectoService.listarSemestre().subscribe({
//       next: (resp: SemestreProyecto[]) => {
//         this.semestrelist = resp
//       },
//       error: (err: any) => { console.error(err) }
//     })
//   }

//   // EP
//   listarEp() {
//     this.estadoproyectoService.listarEp().subscribe({
//       next: (resp: EpProyecto[]) => {
//         this.eplist = resp
//       },
//       error: (err: any) => { console.error(err) }
//     });
//   }

//   // FACULTAD
//   listarFacultad() {
//     this.estadoproyectoService.listarFacultad().subscribe({
//       next: (resp: FacultadProyecto[]) => {
//         this.facultadlist = resp
//       },
//       error: (err: any) => { console.error(err) }
//     });
//   }




  
}
