import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConveniosRoutingModule } from './convenios-routing.module';
import { ConvenioComponent } from './pages/convenio/convenio.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { ListaConvenioComponent } from './lista-convenio/lista-convenio.component';
import { AppComponent } from 'src/app/app.component';
import { ActualizarConvenioComponent } from './actualizar-convenio/actualizar-convenio.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ConvenioComponent,
    ListaConvenioComponent,
    ActualizarConvenioComponent
  ],
  imports: [

    CommonModule,
    ConveniosRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    FormsModule

  ],
  bootstrap: [AppComponent],
    
})
export class ConveniosModule { }
