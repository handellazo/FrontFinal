import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MatTabsModule} from '@angular/material/tabs';


import { ProyectoRoutingModule } from './proyecto-routing.module';
import { VentanaemergenteComponent } from './pages/components/ventanaemergente/ventanaemergente.component';
import {MatInputModule} from '@angular/material/input'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ProyectoComponent } from './pages/components/proyecto/proyecto.component';
import { FormProyectoComponent } from './pages/components/form-proyecto/form-proyecto.component';




@NgModule({
  declarations: [
    FormProyectoComponent,
      VentanaemergenteComponent,
      ProyectoComponent,
  ],
  imports: [
    CommonModule,
    ProyectoRoutingModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDatepickerModule, // Mantén solo este módulo
    MatNativeDateModule,  // y este
    MatDialogModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],

})
export class ProyectoModule { }
