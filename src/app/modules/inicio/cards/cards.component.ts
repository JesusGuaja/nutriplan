// Importaciones necesarias para el componente
import { Component } from '@angular/core';

// Decorador que define el componente
@Component({
  selector: 'app-cards', // Selector CSS para usar el componente
  templateUrl: './cards.component.html', // Plantilla HTML del componente
  styleUrls: ['./cards.component.css'] // Hojas de estilo aplicadas al componente
})
export class CardsComponent {
  // Método que lanza un error, no está implementado
  open() {
    throw new Error('Method not implemented.');
  }

  // Variable para controlar el estado del icono sin marcar
  iconoSinMarcar = true;
  
  // Variable para controlar la visibilidad del icono marcado
  mostrarIconoMarcado=false

  // Método para alternar la visibilidad de los iconos
  mostrarMarcado() {
    // Cambiamos el estado de iconoSinMarcar a su opuesto
    this.iconoSinMarcar = !this.iconoSinMarcar;
    // Asignamos a mostrarIconoMarcado el opuesto del estado actual de iconoSinMarcar
    this.mostrarIconoMarcado = !this.iconoSinMarcar;
  }
}
