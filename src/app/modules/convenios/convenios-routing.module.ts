import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvenioComponent } from './pages/convenio/convenio.component';
import { ListaConvenioComponent } from './lista-convenio/lista-convenio.component';
import { RegistrarConvenioComponent } from './registrar-convenio/registrar-convenio.component';
import { ActualizarConvenioComponent } from './actualizar-convenio/actualizar-convenio.component';

const routes: Routes = [
  {
    path:'',
    component:ConvenioComponent,
    outlet:"child"
  },
  {path: 'convenio',component:ListaConvenioComponent},
  // {path:'actualizar-convenio',component : ActualizarConvenioComponent},
  // {path:'registrar-convenio',component : RegistrarConvenioComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
 
  exports: [RouterModule]
})
export class ConveniosRoutingModule { }
