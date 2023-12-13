// Importaciones necesarias para el servicio
import { Injectable } from '@angular/core';
import { Receta } from 'src/app/models/receta';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { async } from 'rxjs';

// Decorador que define el servicio y su ámbito de provisión
@Injectable({
  providedIn: 'root' // El servicio está disponible en toda la aplicación
})
export class CrudService {
  // Colección privada de recetas en Firestore
  private recetasColeccion: AngularFirestoreCollection<Receta>;
  
  // Constructor del servicio, inyectamos AngularFirestore
  constructor(private database: AngularFirestore) { 
    // Inicializamos la colección de recetas
    this.recetasColeccion = database.collection('receta');
  }

  // Método para crear una nueva receta en Firestore
  crearReceta(receta: Receta){
    // Retornamos una nueva promesa
    return new Promise(async(resolve, reject) =>{
      try{
        // Creamos un nuevo ID para la receta
        const id = this.database.createId();
        // Asignamos el ID a la receta
        receta.idProducto = id;
        // Guardamos la receta en Firestore y resolvemos la promesa con el resultado
        const resultado = await this.recetasColeccion.doc(id).set(receta);
        resolve(resultado);
      }catch (error){
        // En caso de error, rechazamos la promesa con el error
        reject(error);
      }
    });
  }

  // Método para obtener todas las recetas de Firestore
  obtenerReceta(){
    // Retornamos el observable de los cambios en la colección
    return this.recetasColeccion.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())));
  }

  // Método para editar una receta existente en Firestore
  modificarReceta(idProducto: string, nuevaData: Receta){
    // Actualizamos la receta con el ID y los nuevos datos proporcionados
    return this.database.collection('receta').doc(idProducto).update(nuevaData);
  }

  // Método para eliminar una receta de Firestore
  eliminarReceta(idProducto: string){
    // Retornamos una nueva promesa
    return new Promise((resolve, reject) => {
      try{
        // Eliminamos la receta con el ID proporcionado y resolvemos la promesa
        const resp = this.recetasColeccion.doc(idProducto).delete();
        resolve(resp);
      }
      catch(error){
        // En caso de error, rechazamos la promesa con el error
        reject(error);
      }
    });
  }
}
