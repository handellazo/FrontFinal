import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarConvenioComponent } from './actualizar-convenio.component';

const routes: Routes = [
  {
    path: '',
    component: ActualizarConvenioComponent,
    outlet:"child"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActualizarConvenioRoutingModule { }
