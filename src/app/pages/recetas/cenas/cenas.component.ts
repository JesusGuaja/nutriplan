import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Receta } from 'src/app/models/receta';
import { RecetasService } from '../services/recetas.service';

@Component({
  selector: 'app-cenas',
  templateUrl: './cenas.component.html',
  styleUrls: ['./cenas.component.css']
})
export class CenasComponent {
  recetasCena$: Observable<Receta[]>= new Observable<Receta[]>();

  constructor(private recetaService: RecetasService) {}

  ngOnInit() {
    // Aquí se obtienen las recetas de la categoría "cena" del servicio.
    this.recetasCena$ = this.recetaService.getRecetasCena();
  }
}
