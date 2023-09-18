import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';
import { CategoriaService } from '../../../services/categorias.service';

@Component({
  selector: 'app-dropdown-categorias',
  templateUrl: './dropdown-categorias.component.html',
  styleUrls: ['./dropdown-categorias.component.css']
})
export class DropdownCategoriasComponent{
  constructor(private categoriaService:CategoriaService){}

  
  @Input() categoria: Categoria = {
    id: 0,
    titulo: ''
  };

}
