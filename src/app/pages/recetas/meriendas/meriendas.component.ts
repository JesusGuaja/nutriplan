import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Receta } from 'src/app/models/receta';
import { RecetasService } from '../services/recetas.service';

@Component({
  selector: 'app-meriendas',
  templateUrl: './meriendas.component.html',
  styleUrls: ['./meriendas.component.css']
})
export class MeriendasComponent {
  recetasMerienda$: Observable<Receta[]>= new Observable<Receta[]>();

  constructor(private recetaService: RecetasService) {}

  ngOnInit() {
    // Aquí se obtienen las recetas de la categoría "merienda" del servicio.
    this.recetasMerienda$ = this.recetaService.getRecetasMerienda();
  }
}
