import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { TerminosComponent } from './terminos/terminos.component';



@NgModule({
  declarations: [
    FavoritosComponent,
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
    TerminosComponent
  ]
})
export class PagesModule { }
