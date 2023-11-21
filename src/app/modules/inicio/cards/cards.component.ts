import { Component } from '@angular/core';
import { Receta } from 'src/app/models/receta';
import { CrudService } from '../../admin/services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  coleccionRecetas: Receta[] = [];
  recetaSeleccionada!: Receta;

  receta = new FormGroup({
    nombre: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
  });

  constructor(private servicioCrud: CrudService) {}

  ngOnInit(): void {
    /* llamamos función obtenerReceta y le enviamos los nuevos valores
    del formulario Receta (se guardan en la colección) */
    this.servicioCrud.obtenerReceta().subscribe((receta) => {
      this.coleccionRecetas = receta;
    });
  }

  async agregarReceta() {
    if (this.receta.valid) {
      let nuevaReceta: Receta = {
        idProducto: '', // único que guardamos vacío; lo creamos en el CRUD
        nombre: this.receta.value.nombre!,
        imagen: this.receta.value.imagen!,
        alt: this.receta.value.alt!,
        descripcion: this.receta.value.descripcion!,
        categoria: this.receta.value.categoria!,
      };

      // ENVIAMOS NUESTRO NUEVO PRODUCTO
    await this.servicioCrud.crearReceta(nuevaReceta)
    .then((receta) => {
      alert('Ha agregado un nuevo producto con éxito :)');
    })
    .catch((error) => {
      alert('Hubo un error al cargar el nuevo producto :( \n' + error);
    });
    }
    
  }
}
