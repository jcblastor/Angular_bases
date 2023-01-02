import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitán América'];
  deleteHeroe: string = '';

  borrarHeroe(): void {
    this.deleteHeroe = this.heroes.pop() || '';
  }
}
