import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetasComponent } from './recetas/recetas.component';
import { TerminosComponent } from './terminos/terminos.component';
import { DesayunosComponent } from './recetas/desayunos/desayunos.component';
import { AlmuerzosComponent } from './recetas/almuerzos/almuerzos.component';
import { MeriendasComponent } from './recetas/meriendas/meriendas.component';
import { CenasComponent } from './recetas/cenas/cenas.component';

import { ContactanosComponent } from './contactanos/contactanos.component';

// Enlazamos todas las rutas de las vistas de pages
const routes: Routes = [
  {path:"contacto",component:ContactanosComponent},
  {path:"recetas",component:RecetasComponent},
  {path:"terminos",component:TerminosComponent},
  {path:"desayunos",component:DesayunosComponent},
  {path:"almuerzos",component:AlmuerzosComponent},
  {path:"meriendas",component:MeriendasComponent},
  {path:"cenas",component:CenasComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
