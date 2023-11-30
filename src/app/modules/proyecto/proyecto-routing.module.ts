import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectoComponent } from './pages/components/proyecto/proyecto.component';

const routes: Routes = [
  {
    path:'',
    component: ProyectoComponent,
    outlet:"child"
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectoRoutingModule { }
