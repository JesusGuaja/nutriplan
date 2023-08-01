import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';


@NgModule({
  declarations: [
    NosotrosComponent
  ],
  imports: [
    CommonModule,
    NosotrosRoutingModule
  ]
})
export class NosotrosModule { }
