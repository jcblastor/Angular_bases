import { Component } from '@angular/core';

import { DbzService } from '../services/dbz.service';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  nuevo: Personaje = {
    nombre: 'prueba',
    poder: 100,
  }

  constructor() {}

}
