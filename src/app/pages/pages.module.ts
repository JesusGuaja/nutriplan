import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { RecetasComponent } from './recetas/recetas.component';
import { TerminosComponent } from './terminos/terminos.component';
import { DesayunosComponent } from './recetas/desayunos/desayunos.component';
import { AlmuerzosComponent } from './recetas/almuerzos/almuerzos.component';
import { MeriendasComponent } from './recetas/meriendas/meriendas.component';
import { CenasComponent } from './recetas/cenas/cenas.component';




@NgModule({
  declarations: [
    FavoritosComponent,
    RecetasComponent,
    TerminosComponent,

    DesayunosComponent,
    AlmuerzosComponent,
    MeriendasComponent,
    CenasComponent

    ContactanosComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  
  ],
  exports:[
    ContactanosComponent,
    FavoritosComponent,
    RecetasComponent,
    TerminosComponent,
   
  ]
})
export class PagesModule { }
