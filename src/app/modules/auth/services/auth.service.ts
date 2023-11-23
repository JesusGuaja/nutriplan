import { Injectable } from '@angular/core';
// Servicio de Autentificación de Firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // referenciamos Auth de Firebase
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  // FUNCIÓN PARA LOGIN
  iniciarSesion(email: string, contrasena: string) {
    // valida email y contraseña de la BD
    return this.afAuth.signInWithEmailAndPassword(email, contrasena);
  }

  // FUNCIÓN PARA REGISTER
  registrar(email: string, password: string) {
    // retorna nuevo valor de nombre y contrasena
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  //Recolectar UID del usuario
  async getuid() {
    //Genera una Promesa, y const user para la captura
    const user = await this.afAuth.currentUser;

    //Condicion para devolver nulo, o el uid si es que lo tiene
    if (user == null) {
      return null;
    } else {
      //Devuelve uid del usuario
      return user.uid;
    }
  }

  cerrarSesion() {
    // devuelve una promesa vacía
    return this.afAuth.signOut();
  }
}
