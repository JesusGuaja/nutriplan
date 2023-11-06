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
    puclic servicioAuth : AuthService, 
    public firestore : FirestoreService,
    public router : Router
  ){}

  async iniciar(){
    const credenciales = {
      email: this.usuarios.email,
      contrasena: this.usuarios.contrasena
    }
  }



}

