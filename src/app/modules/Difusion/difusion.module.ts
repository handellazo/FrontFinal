import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DifusionRoutingModule } from './difusion-routing.module';
import { DifusionComponent } from './pages/difusion/difusion.component';


@NgModule({
  declarations: [
    DifusionComponent
  ],
  imports: [
    CommonModule,
    DifusionRoutingModule
  ]
})
export class DifusionModule { }
