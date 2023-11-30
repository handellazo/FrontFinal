import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarConvenioComponent } from './registrar-convenio.component';
import { ConvenioComponent } from '../pages/convenio/convenio.component';

const routes: Routes = [
 { path:'',
  component:RegistrarConvenioComponent,
  outlet:"child"},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrarConvenioRoutingModule { }
