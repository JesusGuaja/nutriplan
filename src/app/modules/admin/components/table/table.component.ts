import { Component } from '@angular/core';
import { Receta } from 'src/app/models/receta';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  coleccionReceta: Receta [] = [];

  recetaSeleccionada!: Receta;

  modalVisibleReceta: boolean = false;

  receta = new FormGroup({
    nombre: new FormControl('',Validators.required),
    imagen: new FormControl('',Validators.required),
    alt: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    categoria: new FormControl('',Validators.required)
  })

  constructor(
    public servicioCrud: CrudService
  ){}

  ngOnInit(): void{
    this.servicioCrud.obtenerReceta().subscribe(receta => {
      this.coleccionReceta = receta
    })
  }

  async agregarReceta(){
    if (this.receta.valid){
      let nuevaReceta: Receta = {
        idProducto: '',
        nombre: this.receta.value.nombre!,
        imagen: this.receta.value.imagen!,
        alt: this.receta.value.alt!,
        descripcion: this.receta.value.descripcion!,
        categoria: this.receta.value.categoria!
      };

      // enviamos la nueva receta
      await this.servicioCrud.crearReceta(nuevaReceta)
      .then(receta => {
        alert("Ha agregado una nueva receta con exito!");
      })
      .catch(error => {
        alert("Hubo un error al cargar la nueva receta! \n"+error)
      })
    }
  }

  // editar receta
  mostrarEditar(recetaSeleccionada: Receta){

    this.recetaSeleccionada = recetaSeleccionada;

    this.receta.setValue({
      nombre: recetaSeleccionada.nombre,
      imagen: recetaSeleccionada.imagen,
      alt: recetaSeleccionada.alt,
      descripcion: recetaSeleccionada.descripcion,
      categoria: recetaSeleccionada.categoria
    })
  }

  //recibe los valores nuevos en el formulario

  editarReceta(){
    let datos: Receta = {
      idProducto: this.recetaSeleccionada.idProducto,
      nombre: this.receta.value.nombre!,
      imagen: this.receta.value.imagen!,
      alt: this.receta.value.alt!,
      descripcion: this.receta.value.descripcion!,
      categoria: this.receta.value.categoria!
    }

    this.servicioCrud.modificarReceta(this.recetaSeleccionada.idProducto, datos)
    .then(receta => {
      alert("La receta fue modificada con exito!")
    })
    .catch(error => {
      alert("No se pudo modificar la receta \n"+error)
    })
  }

  //eliminar receta
  mostrarBorrar(recetaSeleccionada: Receta){
    this.modalVisibleReceta = true;
    this.recetaSeleccionada = recetaSeleccionada;
  }

  borrarReceta(){
    this.servicioCrud.eliminarReceta(this.recetaSeleccionada.idProducto)
    .then(respuesta => {
      alert("La receta se ha eliminado correctamente");
    })
    .catch(error => {
      alert("No se ha podido eliminar la receta \n"+error)
    })
  }  
}
