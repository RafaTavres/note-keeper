import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';
import { Nota } from 'src/app/models/Nota';
import { CategoriaService } from 'src/app/services/categorias.service';
import { NotaService } from '../../../services/notas.service';

@Component({
  selector: 'app-listar-notas',
  templateUrl: './listar-notas.component.html',
  styleUrls: ['./listar-notas.component.css']
})
export class ListarNotasComponent implements OnInit{
  notas: Nota[] = [];
  categorias: Categoria[];

  constructor(private categoriaService:CategoriaService,private notaService:NotaService){
    this.categorias = [];
    this.categoriaService.selecionarTodos().subscribe((categorias) =>{
     this.categorias = categorias
    }); 
  }

  ngOnInit(): void {
    this.selecionarTodasNotas();
  }

  filtrarNotasPorCategoria(categoria:Categoria | null){
    if(categoria == null){
      this.selecionarTodasNotas();
      return;
    }

    this.selecionarNotasPorCategoria(categoria);
  }

  selecionarTodasNotas(){
    this.notaService.selecionarTodos().subscribe((notas) => {
      this.notas = notas
    });
  }

  selecionarNotasPorCategoria(categoria: Categoria){
    this.notaService.selecionarNotasPorCategoria(categoria).subscribe((notas) =>{
      this.notas = notas;
    })
  }
}
