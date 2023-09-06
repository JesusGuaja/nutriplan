import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './pages/inicio.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  NgbCarousel,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [InicioComponent, CarruselComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    SharedModule,
    NgFor,
    FormsModule,
    NgbCarousel,NgbCarouselModule,  

  ],
  exports: [InicioComponent],
})
export class InicioModule {}
