import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true; // esto es del input

  usuarios: Usuario = {
    uid: '',
    nombre: '',
    email: '',
    rol: '',
    contrasena: ''
  }

  uid = '';

  // creamos una nueva colección para usuarios
  coleccionUsuarios: Usuario[] = [];

  // servicioAuth referencia a nuestro servicio Auth
  constructor(
    public servicioAuth: AuthService, 
    public servicioFirestore: FirestoreService,
    public router: Router
    ) {
  }

  // tomamos nuevos registros y mostramos los resultados
  async registrarse() {
    const credenciales = {
      email: this.usuarios.email,
      contrasena: this.usuarios.contrasena
    };

    const res = await this.servicioAuth.registrar(credenciales.email, credenciales.contrasena)
    // el método THEN nos devuelve el mismo valor que guarda la promesa
    .then(res =>{
      alert("Ha agregado un nuevo usuario con éxito :)");

      this.router.navigate(['/inicio']);
    })
    // el método CATCH creará un error en caso de que las cosas salgan mal
    .catch(error => 
      alert("Hubo un error al cargar el usuario :( \n"+error)
    );

    const uid = await this.servicioAuth.getUid();

    this.usuarios.uid = uid;

    // GUARDA EL NUEVO USUARIO
    this.guardarUser();
  }

  // función que agrega NUEVO USUARIO
  async guardarUser(){
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
    .then(res => {
      console.log(this.usuarios)
    })
    .catch(error =>{
      console.log('Error =>', error)
    })
  }

  async ngOnInit(){
    const uid = await this.servicioAuth.getUid();
    console.log(uid);
  }
}



