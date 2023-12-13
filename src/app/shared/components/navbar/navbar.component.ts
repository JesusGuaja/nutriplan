// Importaciones necesarias para el componente
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Para la navegación entre rutas
import { AuthService } from 'src/app/modules/auth/services/auth.service'; // Servicio de autenticación

// Decorador que define el componente
@Component({
  selector: 'app-navbar', // Selector CSS para usar el componente
  templateUrl: './navbar.component.html', // Plantilla HTML del componente
  styleUrls: ['./navbar.component.css'] // Hojas de estilo aplicadas al componente
})
export class NavbarComponent {
  // Variable para controlar el estado de autenticación del usuario
  estaAutenticado: boolean = false;
  // Variable para controlar el estado del menú (abierto/cerrado)
  isMenuOpen = false;

  // Constructor del componente, inyectamos los servicios necesarios
  constructor(private auth: AuthService, public router: Router){
    // Nos suscribimos al observable de autenticación para actualizar el estado de autenticación
    this.auth.isAuthenticated.subscribe(estado => {
      this.estaAutenticado = estado;
    })
  }

  // Método para cerrar sesión
  cerrar(){
    // Llamamos al servicio de autenticación para cerrar sesión
    this.auth.cerrarSesion();
    // Navegamos a la página de inicio
    this.router.navigate(['/inicio']);
  }

  // Método para alternar el estado del menú
  toggleMenu() {
    // Cambiamos el estado de isMenuOpen a su opuesto
    this.isMenuOpen = !this.isMenuOpen;
  }
}
