// auth.service.ts
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario';
import { FirestoreService } from 'src/app/shared/services/firestore.service';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usuario$: Observable<Usuario | null>;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private firestore: FirestoreService // Asegúrate de inyectar tu servicio Firestore
  ) {
    this.usuario$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          // Aquí deberías obtener el rol del usuario de Firestore
          // Asegúrate de que el método obtenerRol devuelva un Observable<Usuario>
          // El método obtenerRol debe manejar el caso de que el usuario no tenga un rol y devolver null en ese caso
          return this.firestore.obtenerRol(user.uid) as Observable<Usuario | null>;
        } else {
          return of(null);
        }
      })
    );
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

  // Método para iniciar sesión y obtener el token
  iniciarSesion(email: string, contrasena: string) {
    return this.afAuth.signInWithEmailAndPassword(email, contrasena)
      .then((result) => {
        if (result.user) {
          // Si result.user no es null, procede a obtener el token
          return result.user.getIdToken().then((token) => {
            localStorage.setItem('token', token);
            // Puedes establecer una fecha de expiración para el token si lo deseas
            // localStorage.setItem('expira', (new Date().getTime() + (result.user.stsTokenManager.expirationTime)).toString());
          });
        } else {
          // Si result.user es null, maneja el caso como consideres necesario
          // Por ejemplo, podrías lanzar un error o redirigir al usuario a la página de inicio de sesión
          throw new Error('No se pudo obtener la información del usuario.');
        }
      });
  }

  // Método para cerrar sesión y eliminar el token
  cerrarSesion() {
    return this.afAuth.signOut().then(() => {
      // Eliminar el token del almacenamiento local
      localStorage.removeItem('token');
      // Si has establecido una fecha de expiración, también deberías eliminarla
      // localStorage.removeItem('expira');
    });
  }

  // Método para verificar si el token existe y es válido
  estaLogueado(): boolean {
    const token = localStorage.getItem('token');
    // Aquí podrías agregar una verificación adicional para el token, como su fecha de expiración
    return token != null;
  }
}
