import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "",loadChildren:()=>import('./modules/nosotros/nosotros.module').then(m=>m.NosotrosModule)},

  { path: "",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)},
  
  { path: "",loadChildren:()=>import('./shared/shared.module').then(m=>m.SharedModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
