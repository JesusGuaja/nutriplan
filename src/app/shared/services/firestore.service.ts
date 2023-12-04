import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private usuariosCollection: AngularFirestoreCollection
  // dentro de los parametros la BD
  constructor(private database: AngularFirestore) {
    // refenciamos colección de la BD
    this.usuariosCollection = this.database.collection('usuarios')
  }

  // Método para obtener el rol de un usuario por su UID
  obtenerRol(uid: string) {
    return this.database.collection('usuarios').doc(uid).valueChanges();
  }

  agregarUsuario(usuario: Usuario, id: string) {
    // RESOLVE: promesa resulta -> similar al then
    // REJECT: promesa rechazada -> similar al catch
    return new Promise(async (resolve, reject) => {
      try {
        usuario.uid = id;

        const resultado = await this.usuariosCollection.doc(id).set(usuario)
        // muestra el resultado sin problema
        resolve(resultado)
      } catch (error) {
        // en caso de que ocurra un error
        reject(error)
      }
    })
  }
}






