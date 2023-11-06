import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Usuario } from '../../../../models/usuario';
 // falta importar authservice y firestoreservice


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hide = true;

  usuarios: Usuario = {
    uid: '',
    nombre: '',
    email: '',
    rol: '',
    contrasena: '',
  }

  constructor(
    public servicioAuth : AuthService, 
    public firestore : FirestoreService,
    public router : Router
  ){}

  async iniciar(){
    const credenciales = {
      email: this.usuarios.email,
      contrasena: this.usuarios.contrasena
    }

    const res = await this.servicioAuth.iniciarSesion(credenciales.email, credenciales.contrasena)
    .then(res => {
      alert("Se ha logueado con exito");

      this.router.navigate(['/inicio']);
    })
    .catch(error => {
      alert("Hubo un error al inicar sesion" + error);
    })
  }

  //funcion para Cerrar sesion
  async salir(){
    const res = await this.servicioAuth.cerrarSesion()
    .then(res => {
      alert("Ha cerrado sesion con exito");
      console.log(res);

      this.router.navigate(['/inicio']);
    })
  }
}

