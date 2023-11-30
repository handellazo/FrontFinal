import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { MenuComponent } from './modules/menu/pages/menu/menu.component';
const routes: Routes = [
    {
     path:'auth',
     loadChildren: ()=>import('./modules/auth/auth.module').then(m=>m.AuthModule),
   },
   {
     path:'home',
     component:HomeComponent,
     loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
   },
   {
    path:'menu',
    component:MenuComponent,
    loadChildren: () => import('./modules/menu/menu.module').then(m => m.MenuModule),
  },
   {
     path:'**',
     redirectTo:'auth',
   }
 ];
 
 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })


export class AppRoutingModule { }
