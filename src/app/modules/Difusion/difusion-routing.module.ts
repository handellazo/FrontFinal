import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DifusionComponent } from './pages/difusion/difusion.component';

const routes: Routes = [
  {
    path:'',
    component:DifusionComponent,
    outlet:"child"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DifusionRoutingModule { }
