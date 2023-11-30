import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { RouterModule } from '@angular/router';
import{MatTableModule} from '@angular/material/table'


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule
  ],
  exports:[
    SidebarComponent,
    HeaderComponent,
    MatTableModule
  ]
})
export class SharedModule { }
