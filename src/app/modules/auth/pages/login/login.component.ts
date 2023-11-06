import { Component } from '@angular/core';

import {Router} from '@angular/router';
import { Usuario } from '../../../../models/usuario';


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


}

