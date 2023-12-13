import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Receta } from 'src/app/models/receta';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  constructor(private firestore: AngularFirestore) { }

  getRecetasDesayuno(): Observable<Receta[]> {
    // Aquí se filtran las recetas por la categoría "desayuno".
    return this.firestore.collection<Receta>('receta', ref => ref.where('categoria', '==', 'Desayuno')).valueChanges();
  }
  getRecetasAlmuerzo(): Observable<Receta[]> {
    // Aquí se filtran las recetas por la categoría "almuerzo".
    return this.firestore.collection<Receta>('receta', ref => ref.where('categoria', '==', 'Almuerzo')).valueChanges();
  }
  getRecetasCena(): Observable<Receta[]> {
    // Aquí se filtran las recetas por la categoría "cena".
    return this.firestore.collection<Receta>('receta', ref => ref.where('categoria', '==', 'Cena')).valueChanges();
  }
  getRecetasMerienda(): Observable<Receta[]> {
    // Aquí se filtran las recetas por la categoría "merienda".
    return this.firestore.collection<Receta>('receta', ref => ref.where('categoria', '==', 'Merienda')).valueChanges();
  }
}
