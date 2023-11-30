import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'welcome',
    loadChildren: () => import('../welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path:'convenio',
    loadChildren: () => import('../convenios/convenios.module').then(m => m.ConveniosModule)
  },

  {
    path:'proyecto',
    loadChildren: () => import('../Proyecto/proyecto.module').then(m => m.ProyectoModule)
  },

  
  
  {
    path:'difusion',
    loadChildren: () => import('../Difusion/difusion.module').then(m => m.DifusionModule)
  },
  {
    path:'actividad',
    loadChildren: () => import('../Actividades/actividades.module').then(m => m.ActividadesModule)
  },
  {
    path:'informe',
    loadChildren: () => import('../Informe/informe.module').then(m => m.InformeModule)
  },
  {path:'registrar-convenio',
   loadChildren:()=> import('../convenios/registrar-convenio/registrar-convenio.module').then(m=>m.RegistrarConvenioModule)},
   {path:'estado',
  loadChildren:()=>import('../proyecto/pages/components/estado/estado.module').then(m=>m.EstadoModule)},

  {path:'asignacion',
loadChildren:()=>import('../proyecto/pages/components/asignacion/asignacion.module').then(m=>m.AsignacionModule)},

{path:'ejecucion',
loadChildren:()=>import('../Actividades/ejecucion/ejecucion.module').then(m=>m.EjecucionModule)},

{path:'informe-equipo',
loadChildren:()=>import('../Actividades/informe-equipo/informe-equipo.module').then(m=>m.InformeEquipoModule)},



 {
    path:'**',
    redirectTo:'welcome'
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
