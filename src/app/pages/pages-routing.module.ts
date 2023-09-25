import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { RecetasComponent } from './recetas/recetas.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { TerminosComponent } from './terminos/terminos.component';
// Enlazamos todas las rutas de las vistas de pages
const routes: Routes = [
  {path:"contacto",component:ContactoComponent},
  {path:"recetas",component:RecetasComponent},
  {path:"favoritos",component:FavoritosComponent},
  {path:"terminos",component:TerminosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
