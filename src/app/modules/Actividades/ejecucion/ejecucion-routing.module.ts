import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjecucionComponent } from './ejecucion.component';

const routes: Routes = [
  { path:'',
  component:EjecucionComponent,
  outlet:"child"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EjecucionRoutingModule { }
