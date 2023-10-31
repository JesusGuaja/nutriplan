import { Injectable } from '@angular/core';
import { Receta } from 'src/app/models/receta';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { async } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private recetasColeccion: AngularFirestoreCollection<Receta>
  
  constructor(private database: AngularFirestore) { 
    this.recetasColeccion = database.collection('productos')
  }

  //funcion para crear la receta
  crearReceta(receta: Receta){
    return new Promise(async(resolve, reject) =>{
      try{
        const id = this.database.createId();
        receta.idProducto = id;

        const resultado = await this.recetasColeccion.doc(id).set(receta);

        resolve(resultado);

      }catch (error){
        reject(error)
      }
    })
  }

  obtenerReceta(){
    return this.recetasColeccion.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
  }

  //funcion para editar la receta
  
}
