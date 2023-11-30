import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistrarConvenioRoutingModule } from './registrar-convenio-routing.module';
import { RegistrarConvenioComponent } from './registrar-convenio.component';


@NgModule({
  declarations: [
    RegistrarConvenioComponent
   ],
  imports: [
    CommonModule,
    RegistrarConvenioRoutingModule,
    FormsModule
  ]
})
export class RegistrarConvenioModule { }
