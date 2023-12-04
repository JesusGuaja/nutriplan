import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
open() {
throw new Error('Method not implemented.');
}
  iconoSinMarcar = true;
  
  mostrarIconoMarcado=false
  mostrarMarcado() {
    this.iconoSinMarcar=  !this.iconoSinMarcar;
    this.mostrarIconoMarcado = !this.iconoSinMarcar
  }

  
}
