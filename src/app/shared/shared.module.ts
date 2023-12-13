import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';


import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,   
    RouterModule,
    MatMenuModule,
    MatButtonModule,
     
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
