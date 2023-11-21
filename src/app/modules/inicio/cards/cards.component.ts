import { Component } from '@angular/core';
import { Receta } from 'src/app/models/receta';
import { CrudService } from '../../admin/services/crud.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  constructor (private servicioCrud: CrudService){
    
  }
}
