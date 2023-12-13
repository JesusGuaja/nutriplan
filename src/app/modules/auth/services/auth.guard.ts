// Importaciones necesarias para el guardián
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'; // Para la protección de rutas y navegación
import { AuthService } from './auth.service'; // Servicio de autenticación
import { map } from 'rxjs/operators'; // Operador de transformación para observables
import { Observable } from 'rxjs'; // Para trabajar con observables

// Decorador que define el servicio y su ámbito de provisión
@Injectable({
  providedIn: 'root' // El guardián está disponible en toda la aplicación
})
export class AuthGuard implements CanActivate {
  // Constructor del guardián, inyectamos los servicios necesarios
  constructor(private authService: AuthService, private router: Router) {}

  // Método que determina si una ruta puede ser activada
  canActivate(): Observable<boolean> {
    // Retornamos un observable que emite un valor booleano
    return this.authService.usuario$.pipe(
      map(usuario => {
        // Si no hay un usuario autenticado, redirigimos al login y retornamos falso
        if (!usuario) {
          this.router.navigate(['/login']);
          return false;
        }
        // Si hay un usuario autenticado, retornamos verdadero y permitimos la activación de la ruta
        return true;
      })
    );
  }
}
