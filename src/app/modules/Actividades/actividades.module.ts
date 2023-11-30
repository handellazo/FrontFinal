import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActividadesRoutingModule } from './actividades-routing.module';
import { ActividadComponent } from './pages/actividad/actividad.component';
import { EjecucionComponent } from './ejecucion/ejecucion.component';
import { InformeEquipoComponent } from './informe-equipo/informe-equipo.component';


@NgModule({
  declarations: [
    ActividadComponent,
    EjecucionComponent,
    InformeEquipoComponent
  ],
  imports: [
    CommonModule,
    ActividadesRoutingModule
  ]
})
export class ActividadesModule { }
