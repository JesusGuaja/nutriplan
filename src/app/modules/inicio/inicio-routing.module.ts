import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { CardsComponent } from './cards/cards.component';
//Agregamos las rutas de inicio
const routes: Routes = [
  {path: "", component : CardsComponent},
  {path:'inicio', component : InicioComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
