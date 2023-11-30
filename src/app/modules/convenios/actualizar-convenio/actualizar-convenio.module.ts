import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActualizarConvenioRoutingModule } from './actualizar-convenio-routing.module';
import { ActualizarConvenioComponent } from './actualizar-convenio.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ActualizarConvenioComponent
  ],
  imports: [
    CommonModule,
    ActualizarConvenioRoutingModule,
    FormsModule
  ]
})
export class ActualizarConvenioModule { }
