import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformeEquipoComponent } from './informe-equipo.component';

const routes: Routes = [
  { path:'',
  component:InformeEquipoComponent,
  outlet:"child"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformeEquipoRoutingModule { }
