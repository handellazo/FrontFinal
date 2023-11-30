import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcuerdosRoutingModule } from './acuerdos-routing.module';
import { AcuerdosComponent } from './pages/acuerdos/acuerdos.component';


@NgModule({
  declarations: [
    AcuerdosComponent
  ],
  imports: [
    CommonModule,
    AcuerdosRoutingModule
  ]
})
export class AcuerdosModule { }
