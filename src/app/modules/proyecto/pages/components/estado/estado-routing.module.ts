import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadolistarpyComponent } from './estadolistarpy/estadolistarpy.component';


const routes: Routes = [
  { path:'',
  component: EstadolistarpyComponent,
  outlet:"child"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadoRoutingModule { }
