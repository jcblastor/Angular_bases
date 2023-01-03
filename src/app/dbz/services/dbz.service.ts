import { Injectable } from "@angular/core";

import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
    { nombre: 'Goku', poder: 15000 },
    { nombre: 'Vegeta', poder: 12000 },
  ];

  // como js utiliza todo por referencia, tenemos que romper la misma usando un spred
  get personajes(): Personaje[] {
    // [] para indicar un arreglo
    // ... separa las propiedades y las crea nuevamente
    // de esta manera pierden la referencia los arreglos/objetos
    return [...this._personajes]
  }

  constructor() {}


  agregarPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
