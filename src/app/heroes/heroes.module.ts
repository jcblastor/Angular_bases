import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
  // declarations: contienen los componenetes, pipes etc
  declarations: [
    HeroeComponent,
    ListadoComponent,
  ],
  // exports: expone los componentes o lo que necesitemos a otros modulos
  exports: [
    ListadoComponent,
  ],
  // imports: Traemos los modulos con los que necesitamos trabajar.
  // es importante agregar el CommonModule ya que trae las directivas de angular
  imports: [ CommonModule ],
})
export class HeroesModule {}
