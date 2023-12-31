import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { RecetasComponent } from './recetas/recetas.component';
import { TerminosComponent } from './terminos/terminos.component';
import { DesayunosComponent } from './recetas/desayunos/desayunos.component';
import { AlmuerzosComponent } from './recetas/almuerzos/almuerzos.component';
import { MeriendasComponent } from './recetas/meriendas/meriendas.component';
import { CenasComponent } from './recetas/cenas/cenas.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    TerminosComponent,
    DesayunosComponent,
    AlmuerzosComponent,
    MeriendasComponent,
    CenasComponent,
    ContactanosComponent,
    RecetasComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  
  ],
  exports:[
    ContactanosComponent,
    TerminosComponent,
    DesayunosComponent,
    AlmuerzosComponent,
    MeriendasComponent
  ]
})
export class PagesModule { }
