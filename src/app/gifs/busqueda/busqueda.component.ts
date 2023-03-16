import { Component, ViewChild, ElementRef } from '@angular/core';

import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {
   // ! operador para asegurarse que el objeto no es nulo
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  buscar(){
    const valor = this.txtBuscar.nativeElement.value;

    // en el buscador no le ingreso nada no agrega nada vacio
    if(valor.trim().length === 0) {
      return;
    }


    this.gifsService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value = '';
  }

}
