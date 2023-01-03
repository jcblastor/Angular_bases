import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DbzService } from '../services/dbz.service';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {

  @Input() nuevo: Personaje = { nombre: '', poder: 0 }
  // creamos la propiedad que enviara datos al componente padre
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor(private dbzService: DbzService) {}

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) return;

    // enviamos el dato con emit()
    // this.onNuevoPersonaje.emit( this.nuevo );

    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = { nombre: '', poder: 0 };
  }
}
