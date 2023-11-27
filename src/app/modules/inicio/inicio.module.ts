import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

import { InicioComponent } from './pages/inicio/inicio.component';


import { SharedModule } from 'src/app/shared/shared.module';

import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CardsComponent } from './cards/cards.component';
import { CrudService } from '../admin/services/crud.service';

@NgModule({

  declarations: [InicioComponent, CardsComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    SharedModule,
    
  ],
  exports: [InicioComponent, CardsComponent],
})
export class InicioModule {}
