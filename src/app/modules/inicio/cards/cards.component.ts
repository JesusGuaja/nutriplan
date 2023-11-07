import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  iconoSinMarcar = true;
  
  mostrarIconoMarcado=false
  mostrarMarcado() {
    this.iconoSinMarcar=  !this.iconoSinMarcar;
    this.mostrarIconoMarcado = !this.iconoSinMarcar
  }


}