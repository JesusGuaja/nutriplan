// Importaciones necesarias para el componente
import { Component } from '@angular/core';
import { Receta } from 'src/app/models/receta';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// Decorador que define el componente
@Component({
  selector: 'app-table', // Selector CSS para usar el componente
  templateUrl: './table.component.html', // Plantilla HTML del componente
  styleUrls: ['./table.component.css'] // Hojas de estilo aplicadas al componente
})
export class TableComponent {
  // Array para almacenar las recetas obtenidas de la base de datos
  coleccionReceta: Receta [] = [];

  // Variable para almacenar la receta seleccionada por el usuario
  recetaSeleccionada!: Receta;

  // Variable booleana para controlar la visibilidad del modal de recetas
  modalVisibleReceta: boolean = false;

  // Grupo de controles para el formulario de recetas con validaciones
  receta = new FormGroup({
    nombre: new FormControl('',Validators.required),
    imagen: new FormControl('',Validators.required),
    alt: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    categoria: new FormControl('',Validators.required)
  })

  // Constructor del componente, inyectamos el servicio CRUD
  constructor(
    public servicioCrud: CrudService
  ){}

  // Método que se ejecuta al iniciar el componente
  ngOnInit(): void{
    // Obtenemos las recetas de la base de datos y las asignamos al array
    this.servicioCrud.obtenerReceta().subscribe(receta => {
      this.coleccionReceta = receta
    })
  }

  // Método asíncrono para agregar una nueva receta
  async agregarReceta(){
    // Verificamos si el formulario es válido
    if (this.receta.valid){
      // Creamos un objeto receta con los valores del formulario
      let nuevaReceta: Receta = {
        idProducto: '',
        nombre: this.receta.value.nombre!,
        imagen: this.receta.value.imagen!,
        alt: this.receta.value.alt!,
        descripcion: this.receta.value.descripcion!,
        categoria: this.receta.value.categoria!
      };

      // Llamamos al servicio CRUD para crear la nueva receta
      await this.servicioCrud.crearReceta(nuevaReceta)
      .then(receta => {
        // Si la creación es exitosa, mostramos un mensaje
        alert("Ha agregado una nueva receta con exito!");
      })
      .catch(error => {
        // Si hay un error, mostramos un mensaje con el error
        alert("Hubo un error al cargar la nueva receta! \n"+error)
      })
    }
  }

  // Método para mostrar el formulario de edición con los datos de la receta seleccionada
  mostrarEditar(recetaSeleccionada: Receta){
    // Asignamos la receta seleccionada a la variable correspondiente
    this.recetaSeleccionada = recetaSeleccionada;

    // Establecemos los valores del formulario con los datos de la receta seleccionada
    this.receta.setValue({
      nombre: recetaSeleccionada.nombre,
      imagen: recetaSeleccionada.imagen,
      alt: recetaSeleccionada.alt,
      descripcion: recetaSeleccionada.descripcion,
      categoria: recetaSeleccionada.categoria
    })
  }

  // Método para editar una receta existente
  editarReceta(){
    // Creamos un objeto con los nuevos datos de la receta
    let datos: Receta = {
      idProducto: this.recetaSeleccionada.idProducto,
      nombre: this.receta.value.nombre!,
      imagen: this.receta.value.imagen!,
      alt: this.receta.value.alt!,
      descripcion: this.receta.value.descripcion!,
      categoria: this.receta.value.categoria!
    }

    // Llamamos al servicio CRUD para modificar la receta
    this.servicioCrud.modificarReceta(this.recetaSeleccionada.idProducto, datos)
    .then(receta => {
      // Si la modificación es exitosa, mostramos un mensaje
      alert("La receta fue modificada con exito!")
    })
    .catch(error => {
      // Si hay un error, mostramos un mensaje con el error
      alert("No se pudo modificar la receta \n"+error)
    })
  }

  // Método para mostrar el modal de confirmación de eliminación de una receta
  mostrarBorrar(recetaSeleccionada: Receta){
    // Hacemos visible el modal y asignamos la receta seleccionada
    this.modalVisibleReceta = true;
    this.recetaSeleccionada = recetaSeleccionada;
  }

  // Método para eliminar una receta
  borrarReceta(){
    // Llamamos al servicio CRUD para eliminar la receta
    this.servicioCrud.eliminarReceta(this.recetaSeleccionada.idProducto)
    .then(respuesta => {
      // Si la eliminación es exitosa, mostramos un mensaje
      alert("La receta se ha eliminado correctamente");
    })
    .catch(error => {
      // Si hay un error, mostramos un mensaje con el error
      alert("No se ha podido eliminar la receta \n"+error)
    })
  }  
}
