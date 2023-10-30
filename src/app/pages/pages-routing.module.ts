import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetasComponent } from './recetas/recetas.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { TerminosComponent } from './terminos/terminos.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
// Enlazamos todas las rutas de las vistas de pages
const routes: Routes = [
  {path:"contacto",component:ContactanosComponent},
  {path:"recetas",component:RecetasComponent},
  {path:"favoritos",component:FavoritosComponent},
  {path:"terminos",component:TerminosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
