import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private auth : AuthService, public router : Router){}
  cerrar(){
    this.auth.cerrarSesion();
    this.router.navigate(['/inicio'])
  }

}
