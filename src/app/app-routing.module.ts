import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

const routes: Routes = [
  { path: "",loadChildren:()=>import('./modules/nosotros/nosotros.module').then(m=>m.NosotrosModule)},

  { path: "",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
