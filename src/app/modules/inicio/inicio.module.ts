import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

import { InicioComponent } from './pages/inicio/inicio.component';


import { SharedModule } from 'src/app/shared/shared.module';

import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({

  declarations: [InicioComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    SharedModule,
    NgFor,
    FormsModule,
    NgbCarouselModule,
  
  ],
  exports: [InicioComponent],
})
export class InicioModule {}
