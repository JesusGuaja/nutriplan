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
  
  hide = true;

  usuarios: Usuario = {
    uid: '',
    nombre: '',
    email: '',
    rol: '',
    password: ''
  }

  uid = '';

  coleccionUsuarios: Usuario[] = [];

  constructor(
    public servicioAuth: AuthService, 
    public servicioFirestore: FirestoreService,
    public router: Router
  ) { }

  async registrarse() {
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password,
    };
    const res = await this.servicioAuth
      .registrar(credenciales.email, credenciales.password)
      .then((res) => {
        alert('Ha agregado un nuevo usuario con exito');
        this.router.navigate(['/admin'])
      })
      .catch((error) =>
        alert('Hubo un error al cargar el usuario :( \n' + error)
        
      );

    //UID
    const uid = await this.servicioAuth.getuid(); // obteniendo uid

    this.usuarios.uid = uid; //Guardando el uid

    //Mostrando resultados
    console.log(res);
    //Guardar Usuario
    this.guardarUser();
  }

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
    const uid = await this.servicioAuth.getuid();
    console.log(uid);
  }
}



