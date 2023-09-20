import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';
//Agregamos las rutas de las cargas perezosas para inicio y pages
const routes: Routes = [

  {path:"",component:InicioComponent},
  {path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)},
  {path:"",loadChildren:()=>import('./pages/pages.module').then(m=>m.PagesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
