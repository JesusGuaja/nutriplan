import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,   
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
  ]
})
export class SharedModule { }
