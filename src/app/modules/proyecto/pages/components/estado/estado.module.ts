import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadoRoutingModule } from './estado-routing.module';
import { EstadoproyectoService } from './services/estadoproyecto.service';
import { EstadolistarpyComponent } from './estadolistarpy/estadolistarpy.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  
    EstadolistarpyComponent
  ],
  imports: [
    CommonModule,
    EstadoRoutingModule,
    FormsModule,
  ],
  providers: [EstadoproyectoService],


})
export class EstadoModule {}
