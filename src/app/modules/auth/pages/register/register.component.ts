// Importaciones necesarias para el componente
import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario'; // Modelo de usuario
import { FirestoreService } from 'src/app/shared/services/firestore.service'; // Servicio de Firestore
import { AuthService } from '../../services/auth.service'; // Servicio de autenticación
import { Router } from '@angular/router'; // Para la navegación entre rutas

// Decorador que define el componente
@Component({
  selector: 'app-register', // Selector CSS para usar el componente
  templateUrl: './register.component.html', // Plantilla HTML del componente
  styleUrls: ['./register.component.css'] // Hojas de estilo aplicadas al componente
})
export class RegisterComponent {
  // Variable para controlar la visibilidad de la contraseña
  hide = true;

  // Objeto para almacenar los datos del usuario a registrar
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    email: '',
    rol: 'usuario', // Rol por defecto para nuevos usuarios
    password: ''
  }

  // Variable para almacenar el UID del usuario
  uid = '';

  // Array para almacenar los usuarios registrados
  coleccionUsuarios: Usuario[] = [];

  // Constructor del componente, inyectamos los servicios necesarios
  constructor(
    public servicioAuth: AuthService, // Servicio de autenticación
    public servicioFirestore: FirestoreService, // Servicio de Firestore
    public router: Router // Servicio de enrutamiento
  ) { }

  // Método que se ejecuta al iniciar el componente
  async ngOnInit(){
    // Obtenemos el UID del usuario actual y lo mostramos en consola
    const uid = await this.servicioAuth.getuid();
    console.log(uid);
  }

  // Método asíncrono para registrar un nuevo usuario
  async registrarse() {
    // Creamos un objeto con las credenciales del usuario
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password,
    };

    // Llamamos al servicio de autenticación para registrar al usuario
    const res = await this.servicioAuth
      .registrar(credenciales.email, credenciales.password)
      .then((res) => {
        // Si el registro es exitoso, mostramos un mensaje y navegamos al panel de administración
        alert('Ha agregado un nuevo usuario con exito');
        this.router.navigate(['/admin']);
      })
      .catch((error) => {
        // Si hay un error, mostramos un mensaje con el error
        alert('Hubo un error al cargar el usuario :( \n' + error);
      });

    // Obtenemos el UID del usuario registrado
    const uid = await this.servicioAuth.getuid(); // obteniendo uid
    this.usuarios.uid = uid; // Guardando el uid en el objeto de usuario

    // Mostramos los resultados en consola
    console.log(res);

    // Llamamos al método para guardar el usuario en Firestore
    this.guardarUser();
  }

  // Método asíncrono para guardar el usuario en Firestore
  async guardarUser(){
    // Llamamos al servicio de Firestore para agregar el usuario
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
    .then(res => {
      // Si el guardado es exitoso, mostramos el objeto de usuario en consola
      console.log(this.usuarios);
    })
    .catch(error =>{
      // Si hay un error, mostramos el error en consola
      console.log('Error =>', error);
    });
  }
}
