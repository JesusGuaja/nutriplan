import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetasComponent } from './recetas/recetas.component';
import { TerminosComponent } from './terminos/terminos.component';
import { DesayunosComponent } from './recetas/desayunos/desayunos.component';
import { AlmuerzosComponent } from './recetas/almuerzos/almuerzos.component';
import { MeriendasComponent } from './recetas/meriendas/meriendas.component';
import { CenasComponent } from './recetas/cenas/cenas.component';

import { ContactanosComponent } from './contactanos/contactanos.component';
import { AuthGuard } from '../modules/auth/services/auth.guard';

// Enlazamos todas las rutas de las vistas de pages
const routes: Routes = [
  {path:"contacto",component:ContactanosComponent},
  {path:"recetas",component:RecetasComponent, canActivate: [AuthGuard] },
  {path:"terminos",component:TerminosComponent},
  {path:"desayunos",component:DesayunosComponent, canActivate: [AuthGuard]},
  {path:"almuerzos",component:AlmuerzosComponent, canActivate: [AuthGuard]},
  {path:"meriendas",component:MeriendasComponent, canActivate: [AuthGuard]},
  {path:"cenas",component:CenasComponent, canActivate: [AuthGuard]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
