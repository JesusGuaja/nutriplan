import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { RecetasComponent } from './recetas/recetas.component';
import { TerminosComponent } from './terminos/terminos.component';



@NgModule({
  declarations: [
    FavoritosComponent,
    RecetasComponent,
    TerminosComponent,
    ContactanosComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports:[
    ContactanosComponent,
    FavoritosComponent,
    RecetasComponent,
    TerminosComponent
  ]
})
export class PagesModule { }
