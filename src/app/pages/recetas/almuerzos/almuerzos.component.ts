import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Receta } from 'src/app/models/receta';
import { RecetasService } from '../services/recetas.service';


@Component({
  selector: 'app-almuerzos',
  templateUrl: './almuerzos.component.html',
  styleUrls: ['./almuerzos.component.css']
})
export class AlmuerzosComponent implements OnInit{
  recetasAlmuerzo$: Observable<Receta[]>= new Observable<Receta[]>();

  constructor(private recetaService: RecetasService) {}

  ngOnInit() {
    // Aquí se obtienen las recetas de la categoría "almuerzo" del servicio.
    this.recetasAlmuerzo$ = this.recetaService.getRecetasAlmuerzo();
  }
}
