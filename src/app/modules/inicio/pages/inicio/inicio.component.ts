import { Component } from '@angular/core';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  constructor(private _CrudService : CrudService){
  }
}
