import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  coleccionProductos: Producto [] = [];

  productoSeleccionado!: Producto; // ! -> toma valores vacíos

  modalVisibleProducto: boolean = false;

// modalVisible: boolean = false;

// eliminarVisible: boolean = false;

// ENLAZA NUESTRO FORMULARIO
producto = new FormGroup({
nombre: new FormControl('',Validators.required),
imagen: new FormControl('',Validators.required),
alt: new FormControl('',Validators.required),
descripcion: new FormControl('',Validators.required),
precio: new FormControl(0,Validators.required),
categoria: new FormControl('',Validators.required)
})



  constructor(
  // llamamos servicio Crud
  public servicioCrud: CrudService
  ){}
  
  ngOnInit(): void{
  /* llamamos función obtenerProducto y le enviamos los nuevos valores
  del formulario producto (se guardan en la colección) */
  this.servicioCrud.obtenerProducto().subscribe(producto => {
  this.coleccionProductos = producto;
  })
  }
  
  async agregarProducto(){
  if (this.producto.valid){
  let nuevoProducto: Producto = {
  idProducto: '', // único que guardamos vacío; lo creamos en el CRUD
  nombre: this.producto.value.nombre!,
  imagen: this.producto.value.imagen!,
  alt: this.producto.value.alt!,
  descripcion: this.producto.value.descripcion!,
  precio: this.producto.value.precio!,
  categoria: this.producto.value.categoria!
  };
  
  // ENVIAMOS NUESTRO NUEVO PRODUCTO
  await this.servicioCrud.crearProducto(nuevoProducto)
  .then(producto => {
  alert("Ha agregado un nuevo producto con éxito :)");
  })
  .catch(error => {
  alert("Hubo un error al cargar el nuevo producto :( \n"+error);
  })
  }
  }
  
  // EDITAR producto -> se llama con el botón para el modal
  mostrarEditar(productoSeleccionado: Producto){
  this.productoSeleccionado = productoSeleccionado;
  
  // "seteamos" o enviamos los nuevos valores
  // el ID no se vuelve a enviar/ no se modifica
  this.producto.setValue({
  nombre: productoSeleccionado.nombre,
  imagen: productoSeleccionado.imagen,
  alt: productoSeleccionado.alt,
  descripcion: productoSeleccionado.descripcion,
  precio: productoSeleccionado.precio,
  categoria: productoSeleccionado.categoria
  })
  }
  
  // recibe los valores nuevos ingresados en el formulario
  editarProducto(){
  let datos: Producto = {
  idProducto: this.productoSeleccionado.idProducto,
  nombre: this.producto.value.nombre!,
  imagen: this.producto.value.imagen!,
  alt: this.producto.value.alt!,
  descripcion: this.producto.value.descripcion!,
  precio: this.producto.value.precio!,
  categoria: this.producto.value.categoria!
  }
  
  this.servicioCrud.modificarProducto(this.productoSeleccionado.idProducto, datos)
  .then(producto => {
  alert("El producto fue modificado con éxito.");
  })
  .catch(error => {
  alert("No se pudo modificar el producto :( \n"+error);
  })
  }
  
  // ELIMINAR producto
  mostrarBorrar(productoSeleccionado: Producto){ // botón para el modal
  this.modalVisibleProducto = true; // modal
  this.productoSeleccionado = productoSeleccionado;
  }
  
  borrarProducto(){ // función para eliminar producto
  this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto)
  .then(respuesta =>{
  alert("El producto se ha eliminado correctamente.");
  })
  .catch(error => {
  alert("No se ha podido eliminar el producto: \n"+error);
  })
  }
  }






