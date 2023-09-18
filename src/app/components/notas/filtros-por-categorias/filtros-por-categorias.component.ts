import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';

@Component({
  selector: 'app-filtros-por-categorias',
  templateUrl: './filtros-por-categorias.component.html',
  styleUrls: ['./filtros-por-categorias.component.css']
})
export class FiltrosPorCategoriasComponent {

  @Input() categorias:Categoria[] = [];

  @Output() onFiltroSelecionado: EventEmitter<Categoria | null>

  constructor(){
    this.onFiltroSelecionado = new EventEmitter();
  }

  selecionarTodos(){
    this.onFiltroSelecionado.emit(null);
  }

  selecionarComFiltro(categoria:Categoria){
    this.onFiltroSelecionado.emit(categoria);
  }
  
}
