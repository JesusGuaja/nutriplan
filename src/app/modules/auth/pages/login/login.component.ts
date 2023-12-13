// Importaciones necesarias para el componente
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Para la navegación entre rutas
import { Usuario } from '../../../../models/usuario'; // Modelo de usuario
import { AuthService } from '../../services/auth.service'; // Servicio de autenticación
import { FirestoreService } from 'src/app/shared/services/firestore.service'; // Servicio de Firestore

// Decorador que define el componente
@Component({
  selector: 'app-login', // Selector CSS para usar el componente
  templateUrl: './login.component.html', // Plantilla HTML del componente
  styleUrls: ['./login.component.css'] // Hojas de estilo aplicadas al componente
})
export class LoginComponent {
  // Variable para controlar la visibilidad de la contraseña
  hide = true;

  // Objeto para almacenar los datos del usuario
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    email: '',
    rol: '',
    password: '',
  }

  // Constructor del componente, inyectamos los servicios necesarios
  constructor(
    public servicioAuth: AuthService, // Servicio de autenticación
    public firestore: FirestoreService, // Servicio de Firestore
    public router: Router // Servicio de enrutamiento
  ){}

  // Método asíncrono para iniciar sesión
  async iniciar(){
    // Creamos un objeto con las credenciales del usuario
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    }

    // Llamamos al servicio de autenticación para iniciar sesión
    const res = await this.servicioAuth.iniciarSesion(credenciales.email, credenciales.password)
    .then(res => {
      // Si el inicio de sesión es exitoso, mostramos un mensaje y navegamos al inicio
      alert("Se ha logueado con exito");
      this.router.navigate(['/inicio']);
    })
    .catch(error => {
      // Si hay un error, mostramos un mensaje con el error
      alert("Hubo un error al inicar sesion" + error);
    })
  }

  // Método asíncrono para cerrar sesión
  async salir(){
    // Llamamos al servicio de autenticación para cerrar sesión
    const res = await this.servicioAuth.cerrarSesion()
    .then(res => {
      // Si el cierre de sesión es exitoso, mostramos un mensaje en consola y navegamos al inicio
      console.log(res);
      this.router.navigate(['/inicio']);
    })
  }
}
