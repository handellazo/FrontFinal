import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignarrolComponent } from './asignarrol/asignarrol.component';


const routes: Routes = [
  { path:'',
  component: AsignarrolComponent,
  outlet:"child"},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsignacionRoutingModule { }
