import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecetasService } from '../services/recetas.service';
import { Receta } from 'src/app/models/receta';

@Component({
  selector: 'app-desayunos',
  templateUrl: './desayunos.component.html',
  styleUrls: ['./desayunos.component.css']
})
export class DesayunosComponent implements OnInit {
  recetasDesayuno$: Observable<Receta[]>= new Observable<Receta[]>();

  constructor(private recetaService: RecetasService) {}

  ngOnInit() {
    // Aquí se obtienen las recetas de la categoría "desayuno" del servicio.
    this.recetasDesayuno$ = this.recetaService.getRecetasDesayuno();
  }
}
