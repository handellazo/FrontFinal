import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsignacionRoutingModule } from './asignacion-routing.module';
import { AsignarrolComponent } from './asignarrol/asignarrol.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AsignarrolComponent
  ],
  imports: [
    CommonModule,
    AsignacionRoutingModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],

})
export class AsignacionModule { }
