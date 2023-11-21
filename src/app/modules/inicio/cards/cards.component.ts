import { Component } from '@angular/core';
import { Receta } from 'src/app/models/receta';
import { CrudService } from '../../admin/services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  coleccionRecetas : Receta [] = [];
  recetaSeleccionada! : Receta;

  receta = new FormGroup({
    nombre: new FormControl('',Validators.required),
    imagen: new FormControl('',Validators.required),
    alt: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    categoria: new FormControl('',Validators.required)
  })

  constructor (private servicioCrud: CrudService){

  }

  // ngOnInit(): void{
   
  //    this.servicioCrud.obtenerReceta().subscribe(receta => {
  //     this.coleccionRecetas = receta;
  //   })
  // }


}
