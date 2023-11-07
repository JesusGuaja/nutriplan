import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';
import { SharedModule } from './shared/shared.module';
//Agregamos las rutas de las cargas perezosas para inicio y pages



const routes: Routes = [


  {path:"",component:InicioComponent},
  { path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)},
  { path:"",loadChildren:()=>import('./pages/pages.module').then(m=>m.PagesModule)},
  { path: "",loadChildren:()=>import('./modules/auth/auth.module').then(m=>m.AuthModule)},
  { path: "",loadChildren:()=>import('./shared/shared.module').then(m=>m.SharedModule)},


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
